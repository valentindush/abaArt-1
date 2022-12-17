import { Body, Controller, Get, Post } from '@nestjs/common';
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
  signin(@Body() body: SigninDto){
    return this.authService.signin(body)
  }

  @Get('signout')
  signout(){
    return this.authService.signout()
  }
}
