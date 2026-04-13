import { LoginType } from '../../../users/entities/user.entity';
export declare class AuthRegisterPublicDto {
    fullName: string;
    login: string;
    loginType: LoginType;
    password?: string;
    birthDate?: string;
}
