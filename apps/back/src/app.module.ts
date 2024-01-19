import { Module } from '@nestjs/common';
import { PostsModule } from './posts/posts.module';
import { SeedModule } from './seed/seed.module';

@Module({
  imports: [PostsModule, SeedModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
