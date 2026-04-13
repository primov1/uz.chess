import { CourseSectionPublicService } from '../service/courseSection.public.service';
import { CourseSectionListPublicDto } from '../dtos/public/courseSection.list.public.dto';
import { CourseSectionDetailPublicDto } from '../dtos/public/courseSection.detail.public.dto';
export declare class CourseSectionPublicController {
    private readonly service;
    constructor(service: CourseSectionPublicService);
    getAll(): Promise<CourseSectionListPublicDto[]>;
    getOne(id: number): Promise<CourseSectionDetailPublicDto>;
}
