import { Injectable , HttpException, HttpStatus} from '@nestjs/common';

@Injectable()
export class PostService {
    createPost(file: Express.Multer.File){
        if(!file || !this.validateFile(file)){
            throw new HttpException('File must be an image not more than 10mbs ', HttpStatus.BAD_REQUEST)
        }

        
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
}
