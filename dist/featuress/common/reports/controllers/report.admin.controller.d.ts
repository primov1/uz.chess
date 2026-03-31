import { ReportAdminService } from '../service/report.admin.service';
import { ReportListAdminDto } from '../dtos/admin/report.list.admin.dto';
import { ReportDetailAdminDto } from '../dtos/admin/report.detail.admin.dto';
import { ReportCreateAdminDto } from '../dtos/admin/report.create.admin.dto';
import { ReportUpdateAdminDto } from '../dtos/admin/report.update.admin.dto';
export declare class ReportAdminController {
    private readonly service;
    constructor(service: ReportAdminService);
    getAll(): Promise<ReportListAdminDto[]>;
    getOne(id: number): Promise<ReportDetailAdminDto>;
    create(payload: ReportCreateAdminDto): Promise<import("../entities/report.entity").Report>;
    update(id: number, payload: ReportUpdateAdminDto): Promise<import("../entities/report.entity").Report>;
    delete(id: number): Promise<void>;
}
