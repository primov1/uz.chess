import { Module } from '@nestjs/common';
import { AuthorAdminController } from './controllers/author.admin.controller';
import { AuthorPublicController } from './controllers/author.public.controller';
import { AuthorAdminService } from './service/author.admin.service';
import { AuthorPublicService } from './service/author.public.service';

@Module({
  controllers: [AuthorAdminController, AuthorPublicController],
  providers: [AuthorAdminService, AuthorPublicService],
})
export class AuthorModule {}
