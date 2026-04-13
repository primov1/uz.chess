import { BookPublicService } from '../service/book.public.service';
import { BookListPublicDto } from '../dtos/public/book.list.public.dto';
import { BookDetailPublicDto } from '../dtos/public/book.detail.public.dto';
export declare class BookPublicController {
    private readonly bookPublicService;
    constructor(bookPublicService: BookPublicService);
    getAll(): Promise<BookListPublicDto[]>;
    getOne(id: number): Promise<BookDetailPublicDto>;
}
