import { Module } from '@nestjs/common';
import { UserLessonAdminController } from './controllers/userLesson.admin.controller';
import { UserLessonPublicController } from './controllers/userLesson.public.controller';
import { UserLessonAdminService } from './service/userLesson.admin.service';
import { UserLessonPublicService } from './service/userLesson.public.service';

@Module({
  controllers: [UserLessonAdminController, UserLessonPublicController],
  providers: [UserLessonAdminService, UserLessonPublicService],
})
export class UserLessonModule {}
