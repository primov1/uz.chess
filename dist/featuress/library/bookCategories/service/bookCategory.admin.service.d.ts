import { BookCategory } from '../entities/bookCategory.entity';
import { BookCategoryListAdminDto } from '../dtos/admin/bookCategory.list.admin.dto';
import { BookCategoryDetailAdminDto } from '../dtos/admin/bookCategory.detail.admin.dto';
import { BookCategoryCreateAdminDto } from '../dtos/admin/bookCategory.create.admin.dto';
import { BookCategoryUpdateAdminDto } from '../dtos/admin/bookCategory.update.admin.dto';
export declare class BookCategoryAdminService {
    getAll(): Promise<BookCategoryListAdminDto[]>;
    getOne(id: number): Promise<BookCategoryDetailAdminDto>;
    create(payload: BookCategoryCreateAdminDto): Promise<BookCategory>;
    update(id: number, payload: BookCategoryUpdateAdminDto): Promise<BookCategory>;
    delete(id: number): Promise<void>;
}
