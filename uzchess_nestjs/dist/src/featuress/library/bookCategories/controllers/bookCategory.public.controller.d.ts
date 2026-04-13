import { BookCategoryPublicService } from '../service/bookCategory.public.service';
import { BookCategoryListPublicDto } from '../dtos/public/bookCategory.list.public.dto';
import { BookCategoryDetailPublicDto } from '../dtos/public/bookCategory.detail.public.dto';
export declare class BookCategoryPublicController {
    private readonly service;
    constructor(service: BookCategoryPublicService);
    getAll(): Promise<BookCategoryListPublicDto[]>;
    getOne(id: number): Promise<BookCategoryDetailPublicDto>;
}
