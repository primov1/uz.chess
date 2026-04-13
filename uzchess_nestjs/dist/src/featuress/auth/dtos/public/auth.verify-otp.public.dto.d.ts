import { OtpType } from '../../../common/otpCodes/entities/otpCode.entity';
export declare class AuthVerifyOtpPublicDto {
    login: string;
    code: string;
    type: OtpType;
}
