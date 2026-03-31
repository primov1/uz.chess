import { CoursePublicService } from '../service/course.public.service';
import { CourseListPublicDto } from '../dtos/public/course.list.public.dto';
import { CourseDetailPublicDto } from '../dtos/public/course.detail.public.dto';
export declare class CoursePublicController {
    private readonly service;
    constructor(service: CoursePublicService);
    getAll(): Promise<CourseListPublicDto[]>;
    getOne(id: number): Promise<CourseDetailPublicDto>;
}
