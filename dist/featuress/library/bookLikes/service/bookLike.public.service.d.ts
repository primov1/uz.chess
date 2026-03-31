import { BookLikeListPublicDto } from '../dtos/public/bookLike.list.public.dto';
import { BookLikeDetailPublicDto } from '../dtos/public/bookLike.detail.public.dto';
export declare class BookLikePublicService {
    getAll(): Promise<BookLikeListPublicDto[]>;
    getOne(id: number): Promise<BookLikeDetailPublicDto>;
    toggle(bookId: number, userId: number): Promise<{
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
    getMyLikes(userId: number): Promise<BookLikeListPublicDto[]>;
}
