import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { PrismaService } from './prisma/prisma.service';
import { UserController } from './user/user.controller';
import { PostController } from './post/post.controller';
import { UserService } from './user/user.service';
import { PostService } from './post/post.service';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
  ],
  controllers: [UserController, PostController],
  providers: [PrismaService, UserService, PostService],
})
export class AppModule {}
