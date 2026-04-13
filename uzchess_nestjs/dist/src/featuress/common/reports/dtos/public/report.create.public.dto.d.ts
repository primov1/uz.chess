import { ReportType } from '../../entities/report.entity';
export declare class ReportCreatePublicDto {
    reportCategoryId: number;
    target: ReportType;
    targetId: number;
    description?: string;
}
