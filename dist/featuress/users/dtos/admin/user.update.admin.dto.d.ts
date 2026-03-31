import { UserRole } from '../../entities/user.entity';
export declare class UserUpdateAdminDto {
    role?: UserRole;
    fullName?: string;
    profileImage?: string;
    password?: string;
    birthDate?: string;
    isVerified?: boolean;
    isActive?: boolean;
}
