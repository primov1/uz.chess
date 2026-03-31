import { BaseModel } from '../../../../core/base-model';
import { Course } from '../../courses/entities/course.entity';
import { CourseLesson } from '../../courseLessons/entities/courseLesson.entity';
export declare class CourseSection extends BaseModel {
    courseId: number;
    title: string;
    order?: number;
    date: Date;
    course: Course;
    lessons: CourseLesson[];
}
