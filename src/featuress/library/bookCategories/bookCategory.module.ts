import { Module } from '@nestjs/common';
import { BookCategoryAdminController } from './controllers/bookCategory.admin.controller';
import { BookCategoryPublicController } from './controllers/bookCategory.public.controller';
import { BookCategoryAdminService } from './service/bookCategory.admin.service';
import { BookCategoryPublicService } from './service/bookCategory.public.service';

@Module({
  controllers: [BookCategoryAdminController, BookCategoryPublicController],
  providers: [BookCategoryAdminService, BookCategoryPublicService],
})
export class BookCategoryModule {}
