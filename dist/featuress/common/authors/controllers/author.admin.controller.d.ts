import { AuthorAdminService } from '../service/author.admin.service';
import { AuthorListAdminDto } from '../dtos/admin/author.list.admin.dto';
import { AuthorDetailAdminDto } from '../dtos/admin/author.detail.admin.dto';
import { AuthorCreateAdminDto } from '../dtos/admin/author.create.admin.dto';
import { AuthorUpdateAdminDto } from '../dtos/admin/author.update.admin.dto';
export declare class AuthorAdminController {
    private readonly service;
    constructor(service: AuthorAdminService);
    getAll(): Promise<AuthorListAdminDto[]>;
    getOne(id: number): Promise<AuthorDetailAdminDto>;
    create(payload: AuthorCreateAdminDto): Promise<import("../entities/author.entity").Author>;
    update(id: number, payload: AuthorUpdateAdminDto): Promise<import("../entities/author.entity").Author>;
    delete(id: number): Promise<void>;
}
