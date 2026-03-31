import { Module } from '@nestjs/common';
import { MatchAdminController } from './controllers/match.admin.controller';
import { MatchPublicController } from './controllers/match.public.controller';
import { MatchAdminService } from './service/match.admin.service';
import { MatchPublicService } from './service/match.public.service';

@Module({
  controllers: [MatchAdminController, MatchPublicController],
  providers: [MatchAdminService, MatchPublicService],
})
export class MatchModule {}
