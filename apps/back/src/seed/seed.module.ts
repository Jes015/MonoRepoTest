import { Module } from '@nestjs/common';
import { PostsModule } from 'src/posts/posts.module';
import { SeedController } from './seed.controller';
import { SeedService } from './seed.service';

@Module({
  controllers: [SeedController],
  providers: [SeedService],
  imports: [PostsModule],
})
export class SeedModule {}
