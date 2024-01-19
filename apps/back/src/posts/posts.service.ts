import { Injectable } from '@nestjs/common';
import { TPostArray, TPostPartial } from 'apptypes';
@Injectable()
export class PostsService {
  private posts: TPostArray = [];

  public add(post: TPostPartial) {
    post.id = crypto.randomUUID();

    this.posts.push(post);

    return post;
  }

  public getAll(): TPostArray {
    return structuredClone(this.posts);
  }
}
