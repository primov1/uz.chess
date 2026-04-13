import { ReportCategory } from '../entities/reportCategory.entity';
import { ReportCategoryListAdminDto } from '../dtos/admin/reportCategory.list.admin.dto';
import { ReportCategoryDetailAdminDto } from '../dtos/admin/reportCategory.detail.admin.dto';
import { ReportCategoryCreateAdminDto } from '../dtos/admin/reportCategory.create.admin.dto';
import { ReportCategoryUpdateAdminDto } from '../dtos/admin/reportCategory.update.admin.dto';
export declare class ReportCategoryAdminService {
    getAll(): Promise<ReportCategoryListAdminDto[]>;
    getOne(id: number): Promise<ReportCategoryDetailAdminDto>;
    create(payload: ReportCategoryCreateAdminDto): Promise<ReportCategory>;
    update(id: number, payload: ReportCategoryUpdateAdminDto): Promise<ReportCategory>;
    delete(id: number): Promise<void>;
}
