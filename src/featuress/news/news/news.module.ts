import { Module } from '@nestjs/common';
import { NewsAdminController } from './controllers/news.admin.controller';
import { NewsPublicController } from './controllers/news.public.controller';
import { NewsAdminService } from './service/news.admin.service';
import { NewsPublicService } from './service/news.public.service';

@Module({
  controllers: [NewsAdminController, NewsPublicController],
  providers: [NewsAdminService, NewsPublicService],
})
export class NewsItemModule {}
