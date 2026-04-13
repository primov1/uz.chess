import { MatchListPublicDto } from '../dtos/public/match.list.public.dto';
import { MatchDetailPublicDto } from '../dtos/public/match.detail.public.dto';
export declare class MatchPublicService {
    getAll(): Promise<MatchListPublicDto[]>;
    getOne(id: number): Promise<MatchDetailPublicDto>;
}
