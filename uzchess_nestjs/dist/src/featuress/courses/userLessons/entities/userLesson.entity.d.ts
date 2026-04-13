import { BaseModel } from '../../../../core/base-model';
import { CourseLesson } from '../../courseLessons/entities/courseLesson.entity';
import { User } from '../../../users/entities/user.entity';
export declare class UserLesson extends BaseModel {
    userId: number;
    courseLessonId: number;
    stoppedAt?: number;
    isCompleted: boolean;
    lesson: CourseLesson;
    user: User;
}
