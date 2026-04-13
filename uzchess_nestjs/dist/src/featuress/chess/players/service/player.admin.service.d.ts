import { Player } from '../entities/player.entity';
import { PlayerListAdminDto } from '../dtos/admin/player.list.admin.dto';
import { PlayerDetailAdminDto } from '../dtos/admin/player.detail.admin.dto';
import { PlayerCreateAdminDto } from '../dtos/admin/player.create.admin.dto';
import { PlayerUpdateAdminDto } from '../dtos/admin/player.update.admin.dto';
export declare class PlayerAdminService {
    getAll(): Promise<PlayerListAdminDto[]>;
    getOne(id: number): Promise<PlayerDetailAdminDto>;
    create(payload: PlayerCreateAdminDto, file?: Express.Multer.File): Promise<Player>;
    update(id: number, payload: PlayerUpdateAdminDto, file?: Express.Multer.File): Promise<Player>;
    delete(id: number): Promise<void>;
}
