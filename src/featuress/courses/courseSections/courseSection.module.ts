import { Module } from '@nestjs/common';
import { CourseSectionAdminController } from './controllers/courseSection.admin.controller';
import { CourseSectionPublicController } from './controllers/courseSection.public.controller';
import { CourseSectionAdminService } from './service/courseSection.admin.service';
import { CourseSectionPublicService } from './service/courseSection.public.service';

@Module({
  controllers: [CourseSectionAdminController, CourseSectionPublicController],
  providers: [CourseSectionAdminService, CourseSectionPublicService],
})
export class CourseSectionModule {}
