import { Module } from '@nestjs/common';
import { ReportCategoryAdminController } from './controllers/reportCategory.admin.controller';
import { ReportCategoryPublicController } from './controllers/reportCategory.public.controller';
import { ReportCategoryAdminService } from './service/reportCategory.admin.service';
import { ReportCategoryPublicService } from './service/reportCategory.public.service';

@Module({
  controllers: [ReportCategoryAdminController, ReportCategoryPublicController],
  providers: [ReportCategoryAdminService, ReportCategoryPublicService],
})
export class ReportCategoryModule {}
