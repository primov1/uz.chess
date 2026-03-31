import { Module } from '@nestjs/common';
import { BookAdminController } from './controllers/book.admin.controller';
import { BookPublicController } from './controllers/book.public.controller';
import { BookAdminService } from './service/book.admin.service';
import { BookPublicService } from './service/book.public.service';

@Module({
  controllers: [BookAdminController, BookPublicController],
  providers: [BookAdminService, BookPublicService],
})
export class BookModule {}
