import { Body, Controller, Post } from '@nestjs/common';
import { ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { AuthPublicService } from '../services/auth.public.service';
import { AuthRegisterPublicDto } from '../dtos/public/auth.register.public.dto';
import { AuthLoginPublicDto } from '../dtos/public/auth.login.public.dto';
import { AuthVerifyOtpPublicDto } from '../dtos/public/auth.verify-otp.public.dto';
import { AuthForgotPasswordPublicDto } from '../dtos/public/auth.forgot-password.public.dto';
import { AuthResetPasswordPublicDto } from '../dtos/public/auth.reset-password.public.dto';
import { AuthTokenPublicDto } from '../dtos/public/auth.token.public.dto';
import { Public } from '../decorators/public.decorator';

@ApiTags('Auth')
@Controller('auth')
export class AuthPublicController {
  constructor(private readonly authService: AuthPublicService) {}

  @Public()
  @Post('register')
  @ApiOkResponse({ description: "Ro'yxatdan o'tish — OTP yuboriladi" })
  register(@Body() payload: AuthRegisterPublicDto) {
    return this.authService.register(payload);
  }

  @Public()
  @Post('verify-otp')
  @ApiOkResponse({ type: AuthTokenPublicDto, description: 'OTP tasdiqlash' })
  verifyOtp(@Body() payload: AuthVerifyOtpPublicDto) {
    return this.authService.verifyOtp(payload);
  }

  @Public()
  @Post('login')
  @ApiOkResponse({ type: AuthTokenPublicDto, description: 'Login' })
  login(@Body() payload: AuthLoginPublicDto) {
    return this.authService.login(payload);
  }

  @Public()
  @Post('forgot-password')
  @ApiOkResponse({ description: 'Parolni unutish — OTP yuboriladi' })
  forgotPassword(@Body() payload: AuthForgotPasswordPublicDto) {
    return this.authService.forgotPassword(payload);
  }

  @Public()
  @Post('reset-password')
  @ApiOkResponse({ description: 'Parolni tiklash' })
  resetPassword(@Body() payload: AuthResetPasswordPublicDto) {
    return this.authService.resetPassword(payload);
  }

  @Public()
  @Post('refresh-token')
  @ApiOkResponse({ type: AuthTokenPublicDto, description: 'Token yangilash' })
  refreshToken(@Body('refreshToken') refreshToken: string) {
    return this.authService.refreshToken(refreshToken);
  }
}
