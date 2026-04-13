import { DifficultyPublicService } from '../service/difficulty.public.service';
import { DifficultyListPublicDto } from '../dtos/public/difficulty.list.public.dto';
import { DifficultyDetailPublicDto } from '../dtos/public/difficulty.detail.public.dto';
export declare class DifficultyPublicController {
    private readonly service;
    constructor(service: DifficultyPublicService);
    getAll(): Promise<DifficultyListPublicDto[]>;
    getOne(id: number): Promise<DifficultyDetailPublicDto>;
}
