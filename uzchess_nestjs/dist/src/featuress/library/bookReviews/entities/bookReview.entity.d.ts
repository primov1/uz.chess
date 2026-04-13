import { BaseModel } from '../../../../core/base-model';
import { Book } from '../../books/entities/book.entity';
import { User } from '../../../users/entities/user.entity';
export declare class BookReview extends BaseModel {
    userId: number;
    bookId: number;
    rating: number;
    comment?: string;
    date: Date;
    book: Book;
    user: User;
}
