import { Controller, Post, UseInterceptors } from '@nestjs/common';
import { UploadedFile } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { Multer } from 'multer';
import { PostService } from './post.service';

@Controller('post')
export class PostController {
  constructor(private readonly postService: PostService) {}

  @Post('create')
  @UseInterceptors(FileInterceptor('file'))
  createPost(@UploadedFile() file: Express.Multer.File){
    return this.postService.createPost(file)
  }
}
