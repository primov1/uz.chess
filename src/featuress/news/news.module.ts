import { Module } from '@nestjs/common';
import { NewsItemModule } from './news/news.module';

@Module({
  imports: [NewsItemModule],
})
export class NewsModule {}
