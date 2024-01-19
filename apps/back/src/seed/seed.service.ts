import { Injectable } from '@nestjs/common';
import { IPost } from 'apptypes';
import { PostsService } from 'src/posts/posts.service';
import { postDAta } from './data/posts.data';

@Injectable()
export class SeedService {
  constructor(private postsService: PostsService) {}

  seedDb() {
    postDAta.forEach((post: IPost) => {
      this.postsService.add(post);
    });
  }
}
