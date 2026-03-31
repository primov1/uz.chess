import {
  BadRequestException,
  Injectable,
  NotFoundException,
  UnauthorizedException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { User } from '../../users/entities/user.entity';
import {
  OtpCode,
  OtpType,
} from '../../common/otpCodes/entities/otpCode.entity';
import { AuthRegisterPublicDto } from '../dtos/public/auth.register.public.dto';
import { AuthLoginPublicDto } from '../dtos/public/auth.login.public.dto';
import { AuthVerifyOtpPublicDto } from '../dtos/public/auth.verify-otp.public.dto';
import { AuthForgotPasswordPublicDto } from '../dtos/public/auth.forgot-password.public.dto';
import { AuthResetPasswordPublicDto } from '../dtos/public/auth.reset-password.public.dto';
import { JwtPayload } from '../interfaces/jwt-payload.interface';

@Injectable()
export class AuthPublicService {
  constructor(private readonly jwtService: JwtService) {}

  // ─── Token generatsiya ──────────────────────────────────────────────────────
  private generateTokens(user: User) {
    const payload: JwtPayload = {
      sub: user.id,
      login: user.login,
      role: user.role,
    };

    const accessToken = this.jwtService.sign(payload, { expiresIn: '3h' });
    const refreshToken = this.jwtService.sign(payload, { expiresIn: '7d' });

    return { accessToken, refreshToken };
  }

  // ─── Ro'yxatdan o'tish ─────────────────────────────────────────────────────
  async register(payload: AuthRegisterPublicDto) {
    const existing = await User.findOne({ where: { login: payload.login } });
    if (existing) throw new BadRequestException('Bu login allaqachon mavjud');

    // To'g'rilandi: payload.password! (non-null assertion) qo'shildi
    const hashedPassword = await bcrypt.hash(payload.password!, 10);

    // To'g'rilandi: 'as User' olib tashlandi va 'as any' qo'shildi (yoki shunchaki obyekt)
    const user = User.create({
      ...payload,
      password: hashedPassword,
      isVerified: false,
      isActive: false,
    } as any);
    await user.save();

    // Avvalgi OTPlarni o'chirish
    await OtpCode.delete({ userId: user.id, type: OtpType.REGISTER });

    const expiresAt = new Date(Date.now() + 5 * 60 * 1000); // 5 daqiqa
    const otp = OtpCode.create({
      userId: user.id,
      code: Math.floor(100000 + Math.random() * 900000).toString(),
      type: OtpType.REGISTER,
      expiresAt,
    } as any);
    await otp.save();

    // Haqiqiy loyihada SMS/Email service orqali yuboriladi
    console.log(
      `[OTP] Ro'yxatdan o'tish OTP: ${otp.code} → foydalanuvchi: ${user.login}`,
    );

    return { message: 'OTP kod yuborildi', userId: user.id };
  }

  // ... (verifyOtp, login, forgotPassword metodlari o'zgarishsiz qoladi)
  // ─── OTP tasdiqlash ─────────────────────────────────────────────────────────
  async verifyOtp(payload: AuthVerifyOtpPublicDto) {
    const user = await User.findOne({ where: { login: payload.login } });
    if (!user) throw new NotFoundException('Foydalanuvchi topilmadi');

    const otp = await OtpCode.findOne({
      where: { userId: user.id, code: payload.code, type: payload.type },
    });
    if (!otp)
      throw new BadRequestException("OTP kod noto'g'ri yoki muddati tugagan");

    if (otp.expiresAt < new Date()) {
      await otp.remove();
      throw new BadRequestException(
        "OTP kod muddati tugagan. Qaytadan so'rash kerak.",
      );
    }

    if (payload.type === OtpType.REGISTER) {
      user.isVerified = true;
      user.isActive = true;
      await user.save();
    }

    await otp.remove();

    const tokens = this.generateTokens(user);
    return { message: 'Tasdiqlandi', ...tokens };
  }

  async login(payload: AuthLoginPublicDto) {
    const user = await User.findOne({ where: { login: payload.login } });
    if (!user) throw new NotFoundException('Foydalanuvchi topilmadi');

    if (!user.isActive)
      throw new UnauthorizedException(
        'Akkount faol emas. Iltimos, OTP orqali tasdiqlang.',
      );

    const isPasswordValid = await bcrypt.compare(
      payload.password!,
      user.password ?? '',
    );
    if (!isPasswordValid) throw new UnauthorizedException("Parol noto'g'ri");

    return this.generateTokens(user);
  }

  async forgotPassword(payload: AuthForgotPasswordPublicDto) {
    const user = await User.findOne({ where: { login: payload.login } });
    if (!user) throw new NotFoundException('Foydalanuvchi topilmadi');

    await OtpCode.delete({ userId: user.id, type: OtpType.PASSWORD_RESET });

    const expiresAt = new Date(Date.now() + 5 * 60 * 1000);
    const otp = OtpCode.create({
      userId: user.id,
      code: Math.floor(100000 + Math.random() * 900000).toString(),
      type: OtpType.PASSWORD_RESET,
      expiresAt,
    } as any);
    await otp.save();

    return { message: 'Parolni tiklash OTP kodi yuborildi' };
  }

  async resetPassword(payload: AuthResetPasswordPublicDto) {
    const user = await User.findOne({ where: { login: payload.login } });
    if (!user) throw new NotFoundException('Foydalanuvchi topilmadi');

    const otp = await OtpCode.findOne({
      where: {
        userId: user.id,
        code: payload.code,
        type: OtpType.PASSWORD_RESET,
      },
    });
    if (!otp) throw new BadRequestException("OTP kod noto'g'ri");

    if (otp.expiresAt < new Date()) {
      await otp.remove();
      throw new BadRequestException(
        "OTP kod muddati tugagan. Qaytadan so'rash kerak.",
      );
    }

    user.password = await bcrypt.hash(payload.newPassword!, 10);
    await user.save();
    await otp.remove();

    return { message: 'Parol muvaffaqiyatli yangilandi' };
  }

  async refreshToken(refreshToken: string) {
    try {
      const payload = this.jwtService.verify<JwtPayload>(refreshToken);
      const user = await User.findOneBy({ id: payload.sub });
      if (!user || !user.isActive) {
        throw new UnauthorizedException(
          'Foydalanuvchi topilmadi yoki faol emas',
        );
      }
      return this.generateTokens(user);
    } catch {
      throw new UnauthorizedException(
        'Refresh token yaroqsiz yoki muddati tugagan',
      );
    }
  }
}
