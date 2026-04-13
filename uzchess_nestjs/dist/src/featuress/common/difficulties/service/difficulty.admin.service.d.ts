import { Difficulty } from '../entities/difficulty.entity';
import { DifficultyListAdminDto } from '../dtos/admin/difficulty.list.admin.dto';
import { DifficultyDetailAdminDto } from '../dtos/admin/difficulty.detail.admin.dto';
import { DifficultyCreateAdminDto } from '../dtos/admin/difficulty.create.admin.dto';
import { DifficultyUpdateAdminDto } from '../dtos/admin/difficulty.update.admin.dto';
export declare class DifficultyAdminService {
    getAll(): Promise<DifficultyListAdminDto[]>;
    getOne(id: number): Promise<DifficultyDetailAdminDto>;
    create(payload: DifficultyCreateAdminDto): Promise<Difficulty>;
    update(id: number, payload: DifficultyUpdateAdminDto): Promise<Difficulty>;
    delete(id: number): Promise<void>;
}
