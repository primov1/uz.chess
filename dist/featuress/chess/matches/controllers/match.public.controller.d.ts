import { MatchPublicService } from '../service/match.public.service';
import { MatchListPublicDto } from '../dtos/public/match.list.public.dto';
import { MatchDetailPublicDto } from '../dtos/public/match.detail.public.dto';
export declare class MatchPublicController {
    private readonly matchPublicService;
    constructor(matchPublicService: MatchPublicService);
    getAll(): Promise<MatchListPublicDto[]>;
    getOne(id: number): Promise<MatchDetailPublicDto>;
}
