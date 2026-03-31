import { BookReviewListPublicDto } from '../dtos/public/bookReview.list.public.dto';
import { BookReviewDetailPublicDto } from '../dtos/public/bookReview.detail.public.dto';
export declare class BookReviewPublicService {
    getAll(): Promise<BookReviewListPublicDto[]>;
    getOne(id: number): Promise<BookReviewDetailPublicDto>;
}
