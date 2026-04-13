import { Book } from '../entities/book.entity';
import { BookListAdminDto } from '../dtos/admin/book.list.admin.dto';
import { BookDetailAdminDto } from '../dtos/admin/book.detail.admin.dto';
import { BookCreateAdminDto } from '../dtos/admin/book.create.admin.dto';
import { BookUpdateAdminDto } from '../dtos/admin/book.update.admin.dto';
export declare class BookAdminService {
    getAll(): Promise<BookListAdminDto[]>;
    getOne(id: number): Promise<BookDetailAdminDto>;
    create(payload: BookCreateAdminDto): Promise<Book>;
    update(id: number, payload: BookUpdateAdminDto): Promise<Book>;
    delete(id: number): Promise<void>;
}
