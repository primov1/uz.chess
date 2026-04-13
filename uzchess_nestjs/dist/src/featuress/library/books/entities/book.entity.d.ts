import { BaseModel } from '../../../../core/base-model';
import { BookLike } from '../../bookLikes/entities/bookLike.entity';
import { BookReview } from '../../bookReviews/entities/bookReview.entity';
export declare class Book extends BaseModel {
    authorId: number;
    categoryId: number;
    languageId: number;
    difficultyId: number;
    title: string;
    description: string;
    image?: string;
    price: number;
    newPrice?: number;
    rating?: number;
    reviewsCount: number;
    likesCount: number;
    pages: number;
    pubDate: string;
    likes: BookLike[];
    reviews: BookReview[];
}
