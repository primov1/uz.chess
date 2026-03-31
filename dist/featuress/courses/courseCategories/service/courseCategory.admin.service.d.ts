import { CourseCategory } from '../entities/courseCategory.entity';
import { CourseCategoryListAdminDto } from '../dtos/admin/courseCategory.list.admin.dto';
import { CourseCategoryDetailAdminDto } from '../dtos/admin/courseCategory.detail.admin.dto';
import { CourseCategoryCreateAdminDto } from '../dtos/admin/courseCategory.create.admin.dto';
import { CourseCategoryUpdateAdminDto } from '../dtos/admin/courseCategory.update.admin.dto';
export declare class CourseCategoryAdminService {
    getAll(): Promise<CourseCategoryListAdminDto[]>;
    getOne(id: number): Promise<CourseCategoryDetailAdminDto>;
    create(payload: CourseCategoryCreateAdminDto): Promise<CourseCategory>;
    update(id: number, payload: CourseCategoryUpdateAdminDto): Promise<CourseCategory>;
    delete(id: number): Promise<void>;
}
