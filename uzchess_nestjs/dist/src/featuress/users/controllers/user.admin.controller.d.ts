import { UserAdminService } from '../service/user.admin.service';
import { UserListAdminDto } from '../dtos/admin/user.list.admin.dto';
import { UserDetailAdminDto } from '../dtos/admin/user.detail.admin.dto';
import { UserCreateAdminDto } from '../dtos/admin/user.create.admin.dto';
import { UserUpdateAdminDto } from '../dtos/admin/user.update.admin.dto';
export declare class UserAdminController {
    private readonly service;
    constructor(service: UserAdminService);
    getAll(): Promise<UserListAdminDto[]>;
    getOne(id: number): Promise<UserDetailAdminDto>;
    create(payload: UserCreateAdminDto, file?: Express.Multer.File): Promise<import("../entities/user.entity").User>;
    update(id: number, payload: UserUpdateAdminDto, file?: Express.Multer.File): Promise<import("../entities/user.entity").User>;
    delete(id: number): Promise<void>;
}
