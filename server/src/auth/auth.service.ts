import {BadRequestException, Injectable } from '@nestjs/common';
import { PrismaService } from 'prisma/prisma.service';
import { SigninDto } from './dto/signin.dto';
import { SignUPdto } from './dto/signup.dto';
import * as bcrypt from 'bcrypt'

@Injectable()
export class AuthService {
   constructor(private prisma: PrismaService){}
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

   }
   async signout(){

   }

  async hashPassword (password:string){
      const saltRounds = 10
      return await bcrypt.hash(password, saltRounds)
  }
}
