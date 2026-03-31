import { BookCategoryAdminService } from '../service/bookCategory.admin.service';
import { BookCategoryListAdminDto } from '../dtos/admin/bookCategory.list.admin.dto';
import { BookCategoryDetailAdminDto } from '../dtos/admin/bookCategory.detail.admin.dto';
import { BookCategoryCreateAdminDto } from '../dtos/admin/bookCategory.create.admin.dto';
import { BookCategoryUpdateAdminDto } from '../dtos/admin/bookCategory.update.admin.dto';
export declare class BookCategoryAdminController {
    private readonly service;
    constructor(service: BookCategoryAdminService);
    getAll(): Promise<BookCategoryListAdminDto[]>;
    getOne(id: number): Promise<BookCategoryDetailAdminDto>;
    create(payload: BookCategoryCreateAdminDto): Promise<import("../entities/bookCategory.entity").BookCategory>;
    update(id: number, payload: BookCategoryUpdateAdminDto): Promise<import("../entities/bookCategory.entity").BookCategory>;
    delete(id: number): Promise<void>;
}
