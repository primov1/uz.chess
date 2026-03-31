import { Module } from '@nestjs/common';
import { CourseAdminController } from './controllers/course.admin.controller';
import { CoursePublicController } from './controllers/course.public.controller';
import { CourseAdminService } from './service/course.admin.service';
import { CoursePublicService } from './service/course.public.service';

@Module({
  controllers: [CourseAdminController, CoursePublicController],
  providers: [CourseAdminService, CoursePublicService],
})
export class CourseModule {}
