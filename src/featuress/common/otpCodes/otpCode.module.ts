import { Module } from '@nestjs/common';
import { OtpCodeAdminController } from './controllers/otpCode.admin.controller';
import { OtpCodeAdminService } from './service/otpCode.admin.service';

@Module({
  controllers: [OtpCodeAdminController],
  providers: [OtpCodeAdminService],
})
export class OtpCodeModule {}
