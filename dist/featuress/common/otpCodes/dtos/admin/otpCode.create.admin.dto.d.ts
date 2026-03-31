import { OtpType } from '../../entities/otpCode.entity';
export declare class OtpCodeCreateAdminDto {
    userId: number;
    code: string;
    type: OtpType;
    expiresAt: string;
}
