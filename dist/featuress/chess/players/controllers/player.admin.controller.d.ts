import { PlayerAdminService } from '../service/player.admin.service';
import { PlayerListAdminDto } from '../dtos/admin/player.list.admin.dto';
import { PlayerDetailAdminDto } from '../dtos/admin/player.detail.admin.dto';
import { PlayerCreateAdminDto } from '../dtos/admin/player.create.admin.dto';
import { PlayerUpdateAdminDto } from '../dtos/admin/player.update.admin.dto';
export declare class PlayerAdminController {
    private readonly playerAdminService;
    constructor(playerAdminService: PlayerAdminService);
    getAll(): Promise<PlayerListAdminDto[]>;
    getOne(id: number): Promise<PlayerDetailAdminDto>;
    create(payload: PlayerCreateAdminDto, file?: Express.Multer.File): Promise<import("../entities/player.entity").Player>;
    update(id: number, payload: PlayerUpdateAdminDto, file?: Express.Multer.File): Promise<import("../entities/player.entity").Player>;
    delete(id: number): Promise<void>;
}
