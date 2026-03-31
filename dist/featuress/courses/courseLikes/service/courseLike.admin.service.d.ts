import { CourseLike } from '../entities/courseLike.entity';
import { CourseLikeListAdminDto } from '../dtos/admin/courseLike.list.admin.dto';
import { CourseLikeDetailAdminDto } from '../dtos/admin/courseLike.detail.admin.dto';
import { CourseLikeCreateAdminDto } from '../dtos/admin/courseLike.create.admin.dto';
import { CourseLikeUpdateAdminDto } from '../dtos/admin/courseLike.update.admin.dto';
export declare class CourseLikeAdminService {
    getAll(): Promise<CourseLikeListAdminDto[]>;
    getOne(id: number): Promise<CourseLikeDetailAdminDto>;
    create(payload: CourseLikeCreateAdminDto): Promise<CourseLike>;
    update(id: number, payload: CourseLikeUpdateAdminDto): Promise<CourseLike>;
    delete(id: number): Promise<void>;
}
