import { BookReview } from '../entities/bookReview.entity';
import { BookReviewListAdminDto } from '../dtos/admin/bookReview.list.admin.dto';
import { BookReviewDetailAdminDto } from '../dtos/admin/bookReview.detail.admin.dto';
import { BookReviewCreateAdminDto } from '../dtos/admin/bookReview.create.admin.dto';
import { BookReviewUpdateAdminDto } from '../dtos/admin/bookReview.update.admin.dto';
export declare class BookReviewAdminService {
    getAll(): Promise<BookReviewListAdminDto[]>;
    getOne(id: number): Promise<BookReviewDetailAdminDto>;
    create(payload: BookReviewCreateAdminDto): Promise<BookReview>;
    update(id: number, payload: BookReviewUpdateAdminDto): Promise<BookReview>;
    delete(id: number): Promise<void>;
}
