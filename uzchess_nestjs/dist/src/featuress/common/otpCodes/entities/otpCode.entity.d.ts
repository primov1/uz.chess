import { BaseModel } from '@/core/base-model';
import { User } from '../../../users/entities/user.entity';
export declare enum OtpType {
    REGISTER = "register",
    PASSWORD_RESET = "passwordReset",
    NUMBER_CHANGE = "numberChange"
}
export declare class OtpCode extends BaseModel {
    userId: number;
    code: string;
    expiresAt: Date;
    type: OtpType;
    user: User;
}
