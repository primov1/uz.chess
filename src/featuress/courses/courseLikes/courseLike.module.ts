import { Module } from '@nestjs/common';
import { CourseLikeAdminController } from './controllers/courseLike.admin.controller';
import { CourseLikePublicController } from './controllers/courseLike.public.controller';
import { CourseLikeAdminService } from './service/courseLike.admin.service';
import { CourseLikePublicService } from './service/courseLike.public.service';

@Module({
  controllers: [CourseLikeAdminController, CourseLikePublicController],
  providers: [CourseLikeAdminService, CourseLikePublicService],
})
export class CourseLikeModule {}
