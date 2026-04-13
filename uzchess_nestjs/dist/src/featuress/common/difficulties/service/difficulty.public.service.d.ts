import { DifficultyListPublicDto } from '../dtos/public/difficulty.list.public.dto';
import { DifficultyDetailPublicDto } from '../dtos/public/difficulty.detail.public.dto';
export declare class DifficultyPublicService {
    getAll(): Promise<DifficultyListPublicDto[]>;
    getOne(id: number): Promise<DifficultyDetailPublicDto>;
}
