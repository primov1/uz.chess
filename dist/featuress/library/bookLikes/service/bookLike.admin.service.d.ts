import { BookLike } from '../entities/bookLike.entity';
import { BookLikeListAdminDto } from '../dtos/admin/bookLike.list.admin.dto';
import { BookLikeDetailAdminDto } from '../dtos/admin/bookLike.detail.admin.dto';
import { BookLikeCreateAdminDto } from '../dtos/admin/bookLike.create.admin.dto';
import { BookLikeUpdateAdminDto } from '../dtos/admin/bookLike.update.admin.dto';
export declare class BookLikeAdminService {
    getAll(): Promise<BookLikeListAdminDto[]>;
    getOne(id: number): Promise<BookLikeDetailAdminDto>;
    create(payload: BookLikeCreateAdminDto): Promise<BookLike>;
    update(id: number, payload: BookLikeUpdateAdminDto): Promise<BookLike>;
    delete(id: number): Promise<void>;
}
