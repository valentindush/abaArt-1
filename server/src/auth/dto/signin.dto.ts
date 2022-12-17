import {IsEmail, IsNotEmpty, IsString, Length, min } from "class-validator";

export class SigninDto{

    @IsNotEmpty()
    @IsString()
    @IsEmail()
    email: string

    @IsNotEmpty()
    @IsString()
    @Length(8,16, {message: "Password must be between 8 and 16 characters"})
    password: string

}