import { BaseModel } from '../../../../core/base-model';
import { Course } from '../../courses/entities/course.entity';
import { User } from '../../../users/entities/user.entity';
export declare class PurchasedCourse extends BaseModel {
    userId: number;
    courseId: number;
    isCompleted: boolean;
    date: Date;
    course: Course;
    user: User;
}
