import { CourseReview } from '../entities/courseReview.entity';
import { CourseReviewListAdminDto } from '../dtos/admin/courseReview.list.admin.dto';
import { CourseReviewDetailAdminDto } from '../dtos/admin/courseReview.detail.admin.dto';
import { CourseReviewCreateAdminDto } from '../dtos/admin/courseReview.create.admin.dto';
import { CourseReviewUpdateAdminDto } from '../dtos/admin/courseReview.update.admin.dto';
export declare class CourseReviewAdminService {
    getAll(): Promise<CourseReviewListAdminDto[]>;
    getOne(id: number): Promise<CourseReviewDetailAdminDto>;
    create(payload: CourseReviewCreateAdminDto): Promise<CourseReview>;
    update(id: number, payload: CourseReviewUpdateAdminDto): Promise<CourseReview>;
    delete(id: number): Promise<void>;
}
