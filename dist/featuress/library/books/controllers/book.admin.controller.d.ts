import { BookAdminService } from '../service/book.admin.service';
import { BookListAdminDto } from '../dtos/admin/book.list.admin.dto';
import { BookDetailAdminDto } from '../dtos/admin/book.detail.admin.dto';
import { BookCreateAdminDto } from '../dtos/admin/book.create.admin.dto';
import { BookUpdateAdminDto } from '../dtos/admin/book.update.admin.dto';
export declare class BookAdminController {
    private readonly bookAdminService;
    constructor(bookAdminService: BookAdminService);
    getAll(): Promise<BookListAdminDto[]>;
    getOne(id: number): Promise<BookDetailAdminDto>;
    create(payload: BookCreateAdminDto, file?: Express.Multer.File): Promise<import("../entities/book.entity").Book>;
    update(id: number, payload: BookUpdateAdminDto, file?: Express.Multer.File): Promise<import("../entities/book.entity").Book>;
    delete(id: number): Promise<void>;
}
