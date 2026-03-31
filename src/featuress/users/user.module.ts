import { Module } from '@nestjs/common';
import { UserAdminController } from './controllers/user.admin.controller';
import { UserPublicController } from './controllers/user.public.controller';
import { UserAdminService } from './service/user.admin.service';
import { UserPublicService } from './service/user.public.service';

@Module({
  controllers: [UserAdminController, UserPublicController],
  providers: [UserAdminService, UserPublicService],
})
export class UserModule {}
