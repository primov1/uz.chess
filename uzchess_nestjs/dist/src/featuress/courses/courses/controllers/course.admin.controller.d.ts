import { CourseAdminService } from '../service/course.admin.service';
import { CourseListAdminDto } from '../dtos/admin/course.list.admin.dto';
import { CourseDetailAdminDto } from '../dtos/admin/course.detail.admin.dto';
import { CourseCreateAdminDto } from '../dtos/admin/course.create.admin.dto';
import { CourseUpdateAdminDto } from '../dtos/admin/course.update.admin.dto';
export declare class CourseAdminController {
    private readonly service;
    constructor(service: CourseAdminService);
    getAll(): Promise<CourseListAdminDto[]>;
    getOne(id: number): Promise<CourseDetailAdminDto>;
    create(payload: CourseCreateAdminDto, file?: Express.Multer.File): Promise<import("../entities/course.entity").Course>;
    update(id: number, payload: CourseUpdateAdminDto, file?: Express.Multer.File): Promise<import("../entities/course.entity").Course>;
    delete(id: number): Promise<void>;
}
