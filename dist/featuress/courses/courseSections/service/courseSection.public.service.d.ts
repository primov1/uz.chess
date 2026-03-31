import { CourseSectionListPublicDto } from '../dtos/public/courseSection.list.public.dto';
import { CourseSectionDetailPublicDto } from '../dtos/public/courseSection.detail.public.dto';
export declare class CourseSectionPublicService {
    getAll(): Promise<CourseSectionListPublicDto[]>;
    getOne(id: number): Promise<CourseSectionDetailPublicDto>;
}
