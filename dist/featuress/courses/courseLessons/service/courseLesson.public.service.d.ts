import { CourseLessonListPublicDto } from '../dtos/public/courseLesson.list.public.dto';
import { CourseLessonDetailPublicDto } from '../dtos/public/courseLesson.detail.public.dto';
export declare class CourseLessonPublicService {
    getAll(): Promise<CourseLessonListPublicDto[]>;
    getOne(id: number): Promise<CourseLessonDetailPublicDto>;
}
