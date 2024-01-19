import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreatePostDTO } from './dto';
import { PostsService } from './posts.service';

@Controller('posts')
export class PostsController {
  constructor(private postsService: PostsService) {}

  @Get()
  getAll() {
    return this.postsService.getAll();
  }

  @Post()
  addPost(@Body() postService: CreatePostDTO) {
    return this.postsService.add(postService);
  }
}
