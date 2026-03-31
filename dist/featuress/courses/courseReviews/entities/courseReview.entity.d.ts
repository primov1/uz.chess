import { BaseModel } from '../../../../core/base-model';
import { Course } from '../../courses/entities/course.entity';
import { User } from '../../../users/entities/user.entity';
export declare class CourseReview extends BaseModel {
    userId: number;
    courseId: number;
    rating: number;
    comment?: string;
    date: Date;
    course: Course;
    user: User;
}
