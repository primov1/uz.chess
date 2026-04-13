import { CourseReviewAdminService } from '../service/courseReview.admin.service';
import { CourseReviewListAdminDto } from '../dtos/admin/courseReview.list.admin.dto';
import { CourseReviewDetailAdminDto } from '../dtos/admin/courseReview.detail.admin.dto';
import { CourseReviewCreateAdminDto } from '../dtos/admin/courseReview.create.admin.dto';
import { CourseReviewUpdateAdminDto } from '../dtos/admin/courseReview.update.admin.dto';
export declare class CourseReviewAdminController {
    private readonly service;
    constructor(service: CourseReviewAdminService);
    getAll(): Promise<CourseReviewListAdminDto[]>;
    getOne(id: number): Promise<CourseReviewDetailAdminDto>;
    create(payload: CourseReviewCreateAdminDto): Promise<import("../entities/courseReview.entity").CourseReview>;
    update(id: number, payload: CourseReviewUpdateAdminDto): Promise<import("../entities/courseReview.entity").CourseReview>;
    delete(id: number): Promise<void>;
}
