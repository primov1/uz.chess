import { CourseReviewPublicService } from '../service/courseReview.public.service';
import { CourseReviewListPublicDto } from '../dtos/public/courseReview.list.public.dto';
import { CourseReviewDetailPublicDto } from '../dtos/public/courseReview.detail.public.dto';
export declare class CourseReviewPublicController {
    private readonly service;
    constructor(service: CourseReviewPublicService);
    getAll(): Promise<CourseReviewListPublicDto[]>;
    getOne(id: number): Promise<CourseReviewDetailPublicDto>;
}
