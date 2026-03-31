import { PlayerPublicService } from '../service/player.public.service';
import { PlayerListPublicDto } from '../dtos/public/player.list.public.dto';
import { PlayerDetailPublicDto } from '../dtos/public/player.detail.public.dto';
export declare class PlayerPublicController {
    private readonly playerPublicService;
    constructor(playerPublicService: PlayerPublicService);
    getAll(): Promise<PlayerListPublicDto[]>;
    getOne(id: number): Promise<PlayerDetailPublicDto>;
}
