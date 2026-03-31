import { Module } from '@nestjs/common';
import { TermsAdminController } from './controllers/terms.admin.controller';
import { TermsPublicController } from './controllers/terms.public.controller';
import { TermsAdminService } from './service/terms.admin.service';
import { TermsPublicService } from './service/terms.public.service';

@Module({
  controllers: [TermsAdminController, TermsPublicController],
  providers: [TermsAdminService, TermsPublicService],
})
export class TermsModule {}
