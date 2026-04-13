import { Report } from '../entities/report.entity';
import { ReportListAdminDto } from '../dtos/admin/report.list.admin.dto';
import { ReportDetailAdminDto } from '../dtos/admin/report.detail.admin.dto';
import { ReportCreateAdminDto } from '../dtos/admin/report.create.admin.dto';
import { ReportUpdateAdminDto } from '../dtos/admin/report.update.admin.dto';
export declare class ReportAdminService {
    getAll(): Promise<ReportListAdminDto[]>;
    getOne(id: number): Promise<ReportDetailAdminDto>;
    create(payload: ReportCreateAdminDto): Promise<Report>;
    update(id: number, payload: ReportUpdateAdminDto): Promise<Report>;
    delete(id: number): Promise<void>;
}
