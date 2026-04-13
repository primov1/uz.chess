import { ReportListPublicDto } from '../dtos/public/report.list.public.dto';
import { ReportDetailPublicDto } from '../dtos/public/report.detail.public.dto';
import { ReportCreatePublicDto } from '../dtos/public/report.create.public.dto';
export declare class ReportPublicService {
    getAll(): Promise<ReportListPublicDto[]>;
    getOne(id: number): Promise<ReportDetailPublicDto>;
    create(payload: ReportCreatePublicDto, userId: number): Promise<ReportDetailPublicDto>;
}
