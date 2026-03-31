import { Module } from '@nestjs/common';
import { ReportAdminController } from './controllers/report.admin.controller';
import { ReportPublicController } from './controllers/report.public.controller';
import { ReportAdminService } from './service/report.admin.service';
import { ReportPublicService } from './service/report.public.service';

@Module({
  controllers: [ReportAdminController, ReportPublicController],
  providers: [ReportAdminService, ReportPublicService],
})
export class ReportModule {}
