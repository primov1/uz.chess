import { BaseModel } from '../../../../core/base-model';
import { Course } from '../../courses/entities/course.entity';
import { CourseSection } from '../../courseSections/entities/courseSection.entity';
import { UserLesson } from '../../userLessons/entities/userLesson.entity';
export declare class CourseLesson extends BaseModel {
    courseId: number;
    courseSectionId: number;
    title: string;
    content?: string;
    thumbnail?: string;
    video: string;
    order?: number;
    date: Date;
    isFree: boolean;
    course: Course;
    section: CourseSection;
    userLessons: UserLesson[];
}
