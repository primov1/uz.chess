import { BookLikePublicService } from '../service/bookLike.public.service';
import { BookLikeListPublicDto } from '../dtos/public/bookLike.list.public.dto';
import { BookLikeDetailPublicDto } from '../dtos/public/bookLike.detail.public.dto';
import type { JwtPayload } from '../../../auth/interfaces/jwt-payload.interface';
export declare class BookLikePublicController {
    private readonly service;
    constructor(service: BookLikePublicService);
    getAll(): Promise<BookLikeListPublicDto[]>;
    getOne(id: number): Promise<BookLikeDetailPublicDto>;
    getMyLikes(user: JwtPayload): Promise<BookLikeListPublicDto[]>;
    toggle(bookId: number, user: JwtPayload): Promise<{
        liked: boolean;
        likesCount: number;
        message: string;
        data?: undefined;
    } | {
        liked: boolean;
        likesCount: number;
        message: string;
        data: BookLikeDetailPublicDto;
    }>;
}
