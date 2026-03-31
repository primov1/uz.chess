import { AuthPublicService } from '../services/auth.public.service';
import { AuthRegisterPublicDto } from '../dtos/public/auth.register.public.dto';
import { AuthLoginPublicDto } from '../dtos/public/auth.login.public.dto';
import { AuthVerifyOtpPublicDto } from '../dtos/public/auth.verify-otp.public.dto';
import { AuthForgotPasswordPublicDto } from '../dtos/public/auth.forgot-password.public.dto';
import { AuthResetPasswordPublicDto } from '../dtos/public/auth.reset-password.public.dto';
export declare class AuthPublicController {
    private readonly authService;
    constructor(authService: AuthPublicService);
    register(payload: AuthRegisterPublicDto): Promise<{
        message: string;
        userId: any;
    }>;
    verifyOtp(payload: AuthVerifyOtpPublicDto): Promise<{
        accessToken: string;
        refreshToken: string;
        message: string;
    }>;
    login(payload: AuthLoginPublicDto): Promise<{
        accessToken: string;
        refreshToken: string;
    }>;
    forgotPassword(payload: AuthForgotPasswordPublicDto): Promise<{
        message: string;
    }>;
    resetPassword(payload: AuthResetPasswordPublicDto): Promise<{
        message: string;
    }>;
    refreshToken(refreshToken: string): Promise<{
        accessToken: string;
        refreshToken: string;
    }>;
}
