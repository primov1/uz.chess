import { Module } from '@nestjs/common';
import { PlayerAdminController } from './controllers/player.admin.controller';
import { PlayerPublicController } from './controllers/player.public.controller';
import { PlayerAdminService } from './service/player.admin.service';
import { PlayerPublicService } from './service/player.public.service';

@Module({
  controllers: [PlayerAdminController, PlayerPublicController],
  providers: [PlayerAdminService, PlayerPublicService],
})
export class PlayerModule {}
