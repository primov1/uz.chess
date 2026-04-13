import { CourseLikeAdminService } from '../service/courseLike.admin.service';
import { CourseLikeListAdminDto } from '../dtos/admin/courseLike.list.admin.dto';
import { CourseLikeDetailAdminDto } from '../dtos/admin/courseLike.detail.admin.dto';
import { CourseLikeCreateAdminDto } from '../dtos/admin/courseLike.create.admin.dto';
import { CourseLikeUpdateAdminDto } from '../dtos/admin/courseLike.update.admin.dto';
export declare class CourseLikeAdminController {
    private readonly service;
    constructor(service: CourseLikeAdminService);
    getAll(): Promise<CourseLikeListAdminDto[]>;
    getOne(id: number): Promise<CourseLikeDetailAdminDto>;
    create(payload: CourseLikeCreateAdminDto): Promise<import("../entities/courseLike.entity").CourseLike>;
    update(id: number, payload: CourseLikeUpdateAdminDto): Promise<import("../entities/courseLike.entity").CourseLike>;
    delete(id: number): Promise<void>;
}
