import { Module } from '@nestjs/common';
import { DifficultyAdminController } from './controllers/difficulty.admin.controller';
import { DifficultyPublicController } from './controllers/difficulty.public.controller';
import { DifficultyAdminService } from './service/difficulty.admin.service';
import { DifficultyPublicService } from './service/difficulty.public.service';

@Module({
  controllers: [DifficultyAdminController, DifficultyPublicController],
  providers: [DifficultyAdminService, DifficultyPublicService],
})
export class DifficultyModule {}
