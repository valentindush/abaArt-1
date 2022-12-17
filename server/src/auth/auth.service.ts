import {BadRequestException, Injectable } from '@nestjs/common';
import { PrismaService } from 'prisma/prisma.service';
import { SigninDto } from './dto/signin.dto';
import { SignUPdto } from './dto/signup.dto';
import * as bcrypt from 'bcrypt'
import { JwtService } from '@nestjs/jwt';
import { jwtSecret } from 'src/utils/constants';
import { sign } from 'crypto';

@Injectable()
export class AuthService {
   constructor(private prisma: PrismaService, private jwt: JwtService){}
   async signup(body: SignUPdto) {

      const {email, password, fullName} = body

      const foundUser = await this.prisma.user.findUnique({where: {email: email}})

      if(foundUser){
         throw new BadRequestException('Email is already taken')
      }

      const hashedPassword = await this.hashPassword(password)
      await this.prisma.user.create({
         data: {
            email: email,
            fullName: fullName,
            hashedPassword: hashedPassword,
         }
      })

      return {
         status: true,
         message: "User created successfully",
         user: {
            name: fullName,
            email: email
         }
      }
   }
   async signin(body: SigninDto) {
      const {email, password} = body

      const foundUser = await this.prisma.user.findUnique({where: {email: email}})

      if(!foundUser){
         throw new BadRequestException('Incorrenct email or password')
      }
      const isMatch = await this.comparePasswords({password, hash:foundUser.hashedPassword})

      if(!isMatch){
         throw new BadRequestException("Incorrect email or password")
      }

      const signed = await this.signToken({id: foundUser.id, email:foundUser.email})

      return {
         status: true,
         message: "Login Successfull",
         token: signed
      }

   }

   async signout(){

   }

  async hashPassword (password:string){
      const saltRounds = 10
      return await bcrypt.hash(password, saltRounds)
  }

  async comparePasswords(args: {password:string, hash:string}){
      return await bcrypt.compare(args.password,args.hash)
  }

  async signToken(args: {id: string, email: string}){
   const payload = args
   return this.jwt.signAsync(payload, {
      secret: jwtSecret
   })
  }
}
