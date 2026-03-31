import { Module } from '@nestjs/common';
import { CourseReviewAdminController } from './controllers/courseReview.admin.controller';
import { CourseReviewPublicController } from './controllers/courseReview.public.controller';
import { CourseReviewAdminService } from './service/courseReview.admin.service';
import { CourseReviewPublicService } from './service/courseReview.public.service';

@Module({
  controllers: [CourseReviewAdminController, CourseReviewPublicController],
  providers: [CourseReviewAdminService, CourseReviewPublicService],
})
export class CourseReviewModule {}
