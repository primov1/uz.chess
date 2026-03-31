import { Module } from '@nestjs/common';
import { NewsViewAdminController } from './controllers/newsView.admin.controller';
import { NewsViewPublicController } from './controllers/newsView.public.controller';
import { NewsViewAdminService } from './service/newsView.admin.service';
import { NewsViewPublicService } from './service/newsView.public.service';

@Module({
  controllers: [NewsViewAdminController, NewsViewPublicController],
  providers: [NewsViewAdminService, NewsViewPublicService],
})
export class NewsViewModule {}
