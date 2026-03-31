import { Module } from '@nestjs/common';
import { CountryAdminController } from './controllers/country.admin.controller';
import { CountryPublicController } from './controllers/country.public.controller';
import { CountryAdminService } from './service/country.admin.service';
import { CountryPublicService } from './service/country.public.service';

@Module({
  controllers: [CountryAdminController, CountryPublicController],
  providers: [CountryAdminService, CountryPublicService],
})
export class CountryModule {}
