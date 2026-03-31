import { BaseModel } from '../../../core/base-model';
export declare enum UserRole {
    USER = "user",
    ADMIN = "admin",
    SUPER_ADMIN = "superAdmin"
}
export declare enum LoginType {
    EMAIL = "email",
    NUMBER = "number"
}
export declare class User extends BaseModel {
    role: UserRole;
    fullName: string;
    profileImage?: string;
    login: string;
    loginType: LoginType;
    password?: string;
    birthDate?: string;
    isVerified: boolean;
    isActive: boolean;
}
