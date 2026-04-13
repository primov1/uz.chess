import { ReportCategoryAdminService } from '../service/reportCategory.admin.service';
import { ReportCategoryListAdminDto } from '../dtos/admin/reportCategory.list.admin.dto';
import { ReportCategoryDetailAdminDto } from '../dtos/admin/reportCategory.detail.admin.dto';
import { ReportCategoryCreateAdminDto } from '../dtos/admin/reportCategory.create.admin.dto';
import { ReportCategoryUpdateAdminDto } from '../dtos/admin/reportCategory.update.admin.dto';
export declare class ReportCategoryAdminController {
    private readonly service;
    constructor(service: ReportCategoryAdminService);
    getAll(): Promise<ReportCategoryListAdminDto[]>;
    getOne(id: number): Promise<ReportCategoryDetailAdminDto>;
    create(payload: ReportCategoryCreateAdminDto): Promise<import("../entities/reportCategory.entity").ReportCategory>;
    update(id: number, payload: ReportCategoryUpdateAdminDto): Promise<import("../entities/reportCategory.entity").ReportCategory>;
    delete(id: number): Promise<void>;
}
