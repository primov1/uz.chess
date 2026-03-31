import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { APP_GUARD } from '@nestjs/core';
import { AuthPublicController } from './controllers/auth.public.controller';
import { AuthPublicService } from './services/auth.public.service';
import { JwtAuthGuard } from './guards/jwt-auth.guard';
import { RolesGuard } from './guards/roles.guard';
import { jwtConfig } from '../../config/jwt.config';

@Module({
  imports: [
    JwtModule.register(jwtConfig),
  ],
  controllers: [AuthPublicController],
  providers: [
    AuthPublicService,
    // Global guard — barcha endpointlar uchun avtomatik ishlaydi
    // @Public() decorator bilan ozod qilsa bo'ladi
    {
      provide: APP_GUARD,
      useClass: JwtAuthGuard,
    },
    // Rol tekshiruvi — @Roles(UserRole.ADMIN) bilan ishlatiladi
    {
      provide: APP_GUARD,
      useClass: RolesGuard,
    },
  ],
  exports: [AuthPublicService, JwtModule],
})
export class AuthModule {}
