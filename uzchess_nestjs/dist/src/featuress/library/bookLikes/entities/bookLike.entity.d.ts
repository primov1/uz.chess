import { BaseModel } from '../../../../core/base-model';
import { Book } from '../../books/entities/book.entity';
import { User } from '../../../users/entities/user.entity';
export declare class BookLike extends BaseModel {
    userId: number;
    bookId: number;
    date: Date;
    book: Book;
    user: User;
}
