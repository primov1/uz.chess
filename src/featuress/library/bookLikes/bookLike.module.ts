import { Module } from '@nestjs/common';
import { BookLikeAdminController } from './controllers/bookLike.admin.controller';
import { BookLikePublicController } from './controllers/bookLike.public.controller';
import { BookLikeAdminService } from './service/bookLike.admin.service';
import { BookLikePublicService } from './service/bookLike.public.service';

@Module({
  controllers: [BookLikeAdminController, BookLikePublicController],
  providers: [BookLikeAdminService, BookLikePublicService],
})
export class BookLikeModule {}
