import { UserLesson } from '../entities/userLesson.entity';
import { UserLessonListAdminDto } from '../dtos/admin/userLesson.list.admin.dto';
import { UserLessonDetailAdminDto } from '../dtos/admin/userLesson.detail.admin.dto';
import { UserLessonCreateAdminDto } from '../dtos/admin/userLesson.create.admin.dto';
import { UserLessonUpdateAdminDto } from '../dtos/admin/userLesson.update.admin.dto';
export declare class UserLessonAdminService {
    getAll(): Promise<UserLessonListAdminDto[]>;
    getOne(id: number): Promise<UserLessonDetailAdminDto>;
    create(payload: UserLessonCreateAdminDto): Promise<UserLesson>;
    update(id: number, payload: UserLessonUpdateAdminDto): Promise<UserLesson>;
    delete(id: number): Promise<void>;
}
