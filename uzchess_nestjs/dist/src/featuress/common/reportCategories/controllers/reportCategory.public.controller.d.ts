import { ReportCategoryPublicService } from '../service/reportCategory.public.service';
import { ReportCategoryListPublicDto } from '../dtos/public/reportCategory.list.public.dto';
import { ReportCategoryDetailPublicDto } from '../dtos/public/reportCategory.detail.public.dto';
export declare class ReportCategoryPublicController {
    private readonly service;
    constructor(service: ReportCategoryPublicService);
    getAll(): Promise<ReportCategoryListPublicDto[]>;
    getOne(id: number): Promise<ReportCategoryDetailPublicDto>;
}
