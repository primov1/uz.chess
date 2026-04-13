import { LoginType, UserRole } from '../../entities/user.entity';
export declare class UserCreateAdminDto {
    role?: UserRole;
    fullName: string;
    profileImage?: string;
    login: string;
    loginType: LoginType;
    password?: string;
    birthDate?: string;
}
