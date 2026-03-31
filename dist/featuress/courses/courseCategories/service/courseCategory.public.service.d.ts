import { CourseCategoryListPublicDto } from '../dtos/public/courseCategory.list.public.dto';
import { CourseCategoryDetailPublicDto } from '../dtos/public/courseCategory.detail.public.dto';
export declare class CourseCategoryPublicService {
    getAll(): Promise<CourseCategoryListPublicDto[]>;
    getOne(id: number): Promise<CourseCategoryDetailPublicDto>;
}
