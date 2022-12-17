
import {IsEmail, IsNotEmpty, IsString, Length, } from "class-validator";

export class SignUPdto{

    @IsNotEmpty()
    @IsString()
    @IsEmail()
    email: string

    @IsNotEmpty()
    @IsString()
    @Length(3, 30, {message: "Username must be between 3 and 20 characters"})
    fullName: string

    @IsNotEmpty()
    @IsString()
    @Length(8,16, {message: "Password must be between 8 and 16 characters"})
    password: string

}