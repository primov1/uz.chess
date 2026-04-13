import { PlayerListPublicDto } from '../dtos/public/player.list.public.dto';
import { PlayerDetailPublicDto } from '../dtos/public/player.detail.public.dto';
export declare class PlayerPublicService {
    getAll(): Promise<PlayerListPublicDto[]>;
    getOne(id: number): Promise<PlayerDetailPublicDto>;
}
