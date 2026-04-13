import { CourseReviewListPublicDto } from '../dtos/public/courseReview.list.public.dto';
import { CourseReviewDetailPublicDto } from '../dtos/public/courseReview.detail.public.dto';
export declare class CourseReviewPublicService {
    getAll(): Promise<CourseReviewListPublicDto[]>;
    getOne(id: number): Promise<CourseReviewDetailPublicDto>;
}
