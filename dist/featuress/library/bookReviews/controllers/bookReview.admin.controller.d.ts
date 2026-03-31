import { BookReviewAdminService } from '../service/bookReview.admin.service';
import { BookReviewListAdminDto } from '../dtos/admin/bookReview.list.admin.dto';
import { BookReviewDetailAdminDto } from '../dtos/admin/bookReview.detail.admin.dto';
import { BookReviewCreateAdminDto } from '../dtos/admin/bookReview.create.admin.dto';
import { BookReviewUpdateAdminDto } from '../dtos/admin/bookReview.update.admin.dto';
export declare class BookReviewAdminController {
    private readonly service;
    constructor(service: BookReviewAdminService);
    getAll(): Promise<BookReviewListAdminDto[]>;
    getOne(id: number): Promise<BookReviewDetailAdminDto>;
    create(payload: BookReviewCreateAdminDto): Promise<import("../entities/bookReview.entity").BookReview>;
    update(id: number, payload: BookReviewUpdateAdminDto): Promise<import("../entities/bookReview.entity").BookReview>;
    delete(id: number): Promise<void>;
}
