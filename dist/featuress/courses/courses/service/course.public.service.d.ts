import { CourseListPublicDto } from '../dtos/public/course.list.public.dto';
import { CourseDetailPublicDto } from '../dtos/public/course.detail.public.dto';
export declare class CoursePublicService {
    getAll(): Promise<CourseListPublicDto[]>;
    getOne(id: number): Promise<CourseDetailPublicDto>;
}
