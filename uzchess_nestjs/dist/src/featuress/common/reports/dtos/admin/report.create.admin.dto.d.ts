import { ReportType } from '../../entities/report.entity';
export declare class ReportCreateAdminDto {
    userId: number;
    reportCategoryId: number;
    target: ReportType;
    targetId: number;
    description?: string;
}
