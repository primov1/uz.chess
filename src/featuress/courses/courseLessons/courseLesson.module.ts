import { Module } from '@nestjs/common';
import { CourseLessonAdminController } from './controllers/courseLesson.admin.controller';
import { CourseLessonPublicController } from './controllers/courseLesson.public.controller';
import { CourseLessonAdminService } from './service/courseLesson.admin.service';
import { CourseLessonPublicService } from './service/courseLesson.public.service';

@Module({
  controllers: [CourseLessonAdminController, CourseLessonPublicController],
  providers: [CourseLessonAdminService, CourseLessonPublicService],
})
export class CourseLessonModule {}
