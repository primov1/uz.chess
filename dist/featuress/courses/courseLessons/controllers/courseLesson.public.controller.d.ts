import { CourseLessonPublicService } from '../service/courseLesson.public.service';
import { CourseLessonListPublicDto } from '../dtos/public/courseLesson.list.public.dto';
import { CourseLessonDetailPublicDto } from '../dtos/public/courseLesson.detail.public.dto';
export declare class CourseLessonPublicController {
    private readonly service;
    constructor(service: CourseLessonPublicService);
    getAll(): Promise<CourseLessonListPublicDto[]>;
    getOne(id: number): Promise<CourseLessonDetailPublicDto>;
}
