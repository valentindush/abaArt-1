import { Injectable , HttpException, HttpStatus} from '@nestjs/common';
import { Request } from 'express';
import { PostDto } from './dto/postDTO';
import { JwtService } from '@nestjs/jwt';
import { jwtSecret } from 'src/utils/constants';


@Injectable()
export class PostService {

    constructor(private jwt: JwtService){}

    createPost(file: Express.Multer.File,req:Request,body:PostDto){
        if(!file || !this.validateFile(file)){
            throw new HttpException('File must be an image not more than 10mbs ', HttpStatus.BAD_REQUEST)
        }

        //GET token

        
        //Save into the DB


    }

    validateFile(file: Express.Multer.File){
        const maxSize = 10000000
        const extensions = ['PNG','WEBP', 'JPG', 'JPEG','GIF']
        const fileExt = file.mimetype.split('/')[1]
        if(!extensions.includes(fileExt.toUpperCase()) || file.size > maxSize){
            return false
        }else{
            return true
        }
    }
    generateRandomFileName(){
        return `abaart-${Date.now()}-${Math.random() * 1000000}`
    }

    async validateToken(token: string){
        return await this.jwt.verify(token)
    }

    decodeJwt(token: string){
        return this.jwt.decode(token)
    }
}
