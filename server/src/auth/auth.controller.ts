import { Body, Controller, Get, Post, Req, Res } from '@nestjs/common';
import { Request, Response } from 'express';
import { AuthService } from './auth.service';
import { SigninDto } from './dto/signin.dto';
import { SignUPdto } from './dto/signup.dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('signup')
  signup(@Body() body: SignUPdto) {
    return this.authService.signup(body)
  }

  @Post('signin')
  signin(@Body() body: SigninDto, @Req() req: Request, @Res() res: Response){
    return this.authService.signin(body, req, res)
  }

  @Get('signout')
  signout(@Req() req: Request, @Res() res: Response){
    return this.authService.signout(req,res)
  }
}
