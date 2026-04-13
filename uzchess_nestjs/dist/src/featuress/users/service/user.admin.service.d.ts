import { User } from '../entities/user.entity';
import { UserListAdminDto } from '../dtos/admin/user.list.admin.dto';
import { UserDetailAdminDto } from '../dtos/admin/user.detail.admin.dto';
import { UserCreateAdminDto } from '../dtos/admin/user.create.admin.dto';
import { UserUpdateAdminDto } from '../dtos/admin/user.update.admin.dto';
export declare class UserAdminService {
    getAll(): Promise<UserListAdminDto[]>;
    getOne(id: number): Promise<UserDetailAdminDto>;
    create(payload: UserCreateAdminDto): Promise<User>;
    update(id: number, payload: UserUpdateAdminDto): Promise<User>;
    delete(id: number): Promise<void>;
}
