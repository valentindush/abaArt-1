import { Injectable } from "@nestjs/common";
import { SignUpDTO } from "src/DTO/auth.dto";

@Injectable({})
export class AuthService{

    signup(data: SignUpDTO){
        return {data: data}
    }

    login(){


    }
}