import { DifficultyAdminService } from '../service/difficulty.admin.service';
import { DifficultyListAdminDto } from '../dtos/admin/difficulty.list.admin.dto';
import { DifficultyDetailAdminDto } from '../dtos/admin/difficulty.detail.admin.dto';
import { DifficultyCreateAdminDto } from '../dtos/admin/difficulty.create.admin.dto';
import { DifficultyUpdateAdminDto } from '../dtos/admin/difficulty.update.admin.dto';
export declare class DifficultyAdminController {
    private readonly service;
    constructor(service: DifficultyAdminService);
    getAll(): Promise<DifficultyListAdminDto[]>;
    getOne(id: number): Promise<DifficultyDetailAdminDto>;
    create(payload: DifficultyCreateAdminDto, file?: Express.Multer.File): Promise<import("../entities/difficulty.entity").Difficulty>;
    update(id: number, payload: DifficultyUpdateAdminDto, file?: Express.Multer.File): Promise<import("../entities/difficulty.entity").Difficulty>;
    delete(id: number): Promise<void>;
}
