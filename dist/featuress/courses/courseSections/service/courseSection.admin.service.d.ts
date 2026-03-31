import { CourseSection } from '../entities/courseSection.entity';
import { CourseSectionListAdminDto } from '../dtos/admin/courseSection.list.admin.dto';
import { CourseSectionDetailAdminDto } from '../dtos/admin/courseSection.detail.admin.dto';
import { CourseSectionCreateAdminDto } from '../dtos/admin/courseSection.create.admin.dto';
import { CourseSectionUpdateAdminDto } from '../dtos/admin/courseSection.update.admin.dto';
export declare class CourseSectionAdminService {
    getAll(): Promise<CourseSectionListAdminDto[]>;
    getOne(id: number): Promise<CourseSectionDetailAdminDto>;
    create(payload: CourseSectionCreateAdminDto): Promise<CourseSection>;
    update(id: number, payload: CourseSectionUpdateAdminDto): Promise<CourseSection>;
    delete(id: number): Promise<void>;
}
