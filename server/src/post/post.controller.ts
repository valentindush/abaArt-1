import { Controller, Post, UseInterceptors } from '@nestjs/common';
import { UploadedFile , Req} from '@nestjs/common';
import { Body } from '@nestjs/common/decorators';
import { FileInterceptor } from '@nestjs/platform-express';
import { Request } from 'express';
import { Multer } from 'multer';
import { PostDto } from './dto/postDTO';
import { PostService } from './post.service';

@Controller('post')
export class PostController {
  constructor(private readonly postService: PostService) {}

  @Post('create')
  @UseInterceptors(FileInterceptor('file'))
  createPost(@UploadedFile() file: Express.Multer.File, @Req() req:Request, @Body() body:PostDto){
    return this.postService.createPost(file,req,body)
  }
}
