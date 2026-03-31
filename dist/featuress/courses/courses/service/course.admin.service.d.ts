import { Course } from '../entities/course.entity';
import { CourseListAdminDto } from '../dtos/admin/course.list.admin.dto';
import { CourseDetailAdminDto } from '../dtos/admin/course.detail.admin.dto';
import { CourseCreateAdminDto } from '../dtos/admin/course.create.admin.dto';
import { CourseUpdateAdminDto } from '../dtos/admin/course.update.admin.dto';
export declare class CourseAdminService {
    getAll(): Promise<CourseListAdminDto[]>;
    getOne(id: number): Promise<CourseDetailAdminDto>;
    create(payload: CourseCreateAdminDto): Promise<Course>;
    update(id: number, payload: CourseUpdateAdminDto): Promise<Course>;
    delete(id: number): Promise<void>;
}
