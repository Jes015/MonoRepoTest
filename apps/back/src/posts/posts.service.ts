import { Injectable } from '@nestjs/common';
import { TPostArrayPartial, TPostPartial } from 'apptypes';
@Injectable()
export class PostsService {
  private posts: TPostArrayPartial = [];

  public add(post: TPostPartial) {
    post.id = crypto.randomUUID();

    this.posts.push(post);

    return post;
  }

  public getAll(): TPostArrayPartial {
    return structuredClone(this.posts);
  }
}
