import { Author } from '../entities/author.entity';
import { AuthorListAdminDto } from '../dtos/admin/author.list.admin.dto';
import { AuthorDetailAdminDto } from '../dtos/admin/author.detail.admin.dto';
import { AuthorCreateAdminDto } from '../dtos/admin/author.create.admin.dto';
import { AuthorUpdateAdminDto } from '../dtos/admin/author.update.admin.dto';
export declare class AuthorAdminService {
    getAll(): Promise<AuthorListAdminDto[]>;
    getOne(id: number): Promise<AuthorDetailAdminDto>;
    create(payload: AuthorCreateAdminDto): Promise<Author>;
    update(id: number, payload: AuthorUpdateAdminDto): Promise<Author>;
    delete(id: number): Promise<void>;
}
