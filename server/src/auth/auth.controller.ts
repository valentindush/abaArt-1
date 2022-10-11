import { Body, Controller, Post, UsePipes, ValidationPipe } from "@nestjs/common";
import { SignUpDTO } from "src/DTO/auth.dto";
import { AuthService } from "./auth.service";

@Controller("auth")
export class AuthController{
    constructor(private AuthService:AuthService){}

    @Post("signup")
    @UsePipes(ValidationPipe)
    signup(@Body() data:SignUpDTO){
        return this.AuthService.signup(data)
    }

    @Post("login")
    @UsePipes(ValidationPipe)
    signin(){
        return this.AuthService.login()
    }
}