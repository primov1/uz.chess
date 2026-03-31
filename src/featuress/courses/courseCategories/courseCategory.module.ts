import { Module } from '@nestjs/common';
import { CourseCategoryAdminController } from './controllers/courseCategory.admin.controller';
import { CourseCategoryPublicController } from './controllers/courseCategory.public.controller';
import { CourseCategoryAdminService } from './service/courseCategory.admin.service';
import { CourseCategoryPublicService } from './service/courseCategory.public.service';

@Module({
  controllers: [CourseCategoryAdminController, CourseCategoryPublicController],
  providers: [CourseCategoryAdminService, CourseCategoryPublicService],
})
export class CourseCategoryModule {}
