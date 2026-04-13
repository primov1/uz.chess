import { CourseCategoryAdminService } from '../service/courseCategory.admin.service';
import { CourseCategoryListAdminDto } from '../dtos/admin/courseCategory.list.admin.dto';
import { CourseCategoryDetailAdminDto } from '../dtos/admin/courseCategory.detail.admin.dto';
import { CourseCategoryCreateAdminDto } from '../dtos/admin/courseCategory.create.admin.dto';
import { CourseCategoryUpdateAdminDto } from '../dtos/admin/courseCategory.update.admin.dto';
export declare class CourseCategoryAdminController {
    private readonly service;
    constructor(service: CourseCategoryAdminService);
    getAll(): Promise<CourseCategoryListAdminDto[]>;
    getOne(id: number): Promise<CourseCategoryDetailAdminDto>;
    create(payload: CourseCategoryCreateAdminDto): Promise<import("../entities/courseCategory.entity").CourseCategory>;
    update(id: number, payload: CourseCategoryUpdateAdminDto): Promise<import("../entities/courseCategory.entity").CourseCategory>;
    delete(id: number): Promise<void>;
}
