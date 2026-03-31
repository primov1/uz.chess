import { ReportCategoryListPublicDto } from '../dtos/public/reportCategory.list.public.dto';
import { ReportCategoryDetailPublicDto } from '../dtos/public/reportCategory.detail.public.dto';
export declare class ReportCategoryPublicService {
    getAll(): Promise<ReportCategoryListPublicDto[]>;
    getOne(id: number): Promise<ReportCategoryDetailPublicDto>;
}
