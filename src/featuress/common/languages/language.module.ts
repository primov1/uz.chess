import { Module } from '@nestjs/common';
import { LanguageAdminController } from './controllers/language.admin.controller';
import { LanguagePublicController } from './controllers/language.public.controller';
import { LanguageAdminService } from './service/language.admin.service';
import { LanguagePublicService } from './service/language.public.service';

@Module({
  controllers: [LanguageAdminController, LanguagePublicController],
  providers: [LanguageAdminService, LanguagePublicService],
})
export class LanguageModule {}
