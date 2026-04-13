import { CourseCategoryPublicService } from '../service/courseCategory.public.service';
import { CourseCategoryListPublicDto } from '../dtos/public/courseCategory.list.public.dto';
import { CourseCategoryDetailPublicDto } from '../dtos/public/courseCategory.detail.public.dto';
export declare class CourseCategoryPublicController {
    private readonly service;
    constructor(service: CourseCategoryPublicService);
    getAll(): Promise<CourseCategoryListPublicDto[]>;
    getOne(id: number): Promise<CourseCategoryDetailPublicDto>;
}
