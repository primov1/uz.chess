import { BookListPublicDto } from '../dtos/public/book.list.public.dto';
import { BookDetailPublicDto } from '../dtos/public/book.detail.public.dto';
export declare class BookPublicService {
    getAll(): Promise<BookListPublicDto[]>;
    getOne(id: number): Promise<BookDetailPublicDto>;
}
