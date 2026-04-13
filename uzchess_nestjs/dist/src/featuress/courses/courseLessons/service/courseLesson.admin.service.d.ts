import { CourseLesson } from '../entities/courseLesson.entity';
import { CourseLessonListAdminDto } from '../dtos/admin/courseLesson.list.admin.dto';
import { CourseLessonDetailAdminDto } from '../dtos/admin/courseLesson.detail.admin.dto';
import { CourseLessonCreateAdminDto } from '../dtos/admin/courseLesson.create.admin.dto';
import { CourseLessonUpdateAdminDto } from '../dtos/admin/courseLesson.update.admin.dto';
export declare class CourseLessonAdminService {
    getAll(): Promise<CourseLessonListAdminDto[]>;
    getOne(id: number): Promise<CourseLessonDetailAdminDto>;
    create(payload: CourseLessonCreateAdminDto): Promise<CourseLesson>;
    update(id: number, payload: CourseLessonUpdateAdminDto): Promise<CourseLesson>;
    delete(id: number): Promise<void>;
}
