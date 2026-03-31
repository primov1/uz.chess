import { ReportListPublicDto } from '../dtos/public/report.list.public.dto';
import { ReportDetailPublicDto } from '../dtos/public/report.detail.public.dto';
export declare class ReportPublicService {
    getAll(): Promise<ReportListPublicDto[]>;
    getOne(id: number): Promise<ReportDetailPublicDto>;
}
