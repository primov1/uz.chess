import { Module } from '@nestjs/common';
import { PurchasedCourseAdminController } from './controllers/purchasedCourse.admin.controller';
import { PurchasedCoursePublicController } from './controllers/purchasedCourse.public.controller';
import { PurchasedCourseAdminService } from './service/purchasedCourse.admin.service';
import { PurchasedCoursePublicService } from './service/purchasedCourse.public.service';

@Module({
  controllers: [
    PurchasedCourseAdminController,
    PurchasedCoursePublicController,
  ],
  providers: [PurchasedCourseAdminService, PurchasedCoursePublicService],
})
export class PurchasedCourseModule {}
