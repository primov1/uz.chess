import { CourseLessonAdminService } from '../service/courseLesson.admin.service';
import { CourseLessonListAdminDto } from '../dtos/admin/courseLesson.list.admin.dto';
import { CourseLessonDetailAdminDto } from '../dtos/admin/courseLesson.detail.admin.dto';
import { CourseLessonCreateAdminDto } from '../dtos/admin/courseLesson.create.admin.dto';
import { CourseLessonUpdateAdminDto } from '../dtos/admin/courseLesson.update.admin.dto';
export declare class CourseLessonAdminController {
    private readonly service;
    constructor(service: CourseLessonAdminService);
    getAll(): Promise<CourseLessonListAdminDto[]>;
    getOne(id: number): Promise<CourseLessonDetailAdminDto>;
    create(payload: CourseLessonCreateAdminDto, files?: {
        thumbnail?: Express.Multer.File[];
        video?: Express.Multer.File[];
    }): Promise<import("../entities/courseLesson.entity").CourseLesson>;
    update(id: number, payload: CourseLessonUpdateAdminDto, files?: {
        thumbnail?: Express.Multer.File[];
        video?: Express.Multer.File[];
    }): Promise<import("../entities/courseLesson.entity").CourseLesson>;
    delete(id: number): Promise<void>;
}
