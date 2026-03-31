import { Module } from '@nestjs/common';
import { BookReviewAdminController } from './controllers/bookReview.admin.controller';
import { BookReviewPublicController } from './controllers/bookReview.public.controller';
import { BookReviewAdminService } from './service/bookReview.admin.service';
import { BookReviewPublicService } from './service/bookReview.public.service';

@Module({
  controllers: [BookReviewAdminController, BookReviewPublicController],
  providers: [BookReviewAdminService, BookReviewPublicService],
})
export class BookReviewModule {}
