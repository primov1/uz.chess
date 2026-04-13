import { Match } from '../entities/match.entity';
import { MatchListAdminDto } from '../dtos/admin/match.list.admin.dto';
import { MatchDetailAdminDto } from '../dtos/admin/match.detail.admin.dto';
import { MatchCreateAdminDto } from '../dtos/admin/match.create.admin.dto';
import { MatchUpdateAdminDto } from '../dtos/admin/match.update.admin.dto';
export declare class MatchAdminService {
    getAll(): Promise<MatchListAdminDto[]>;
    getOne(id: number): Promise<MatchDetailAdminDto>;
    create(payload: MatchCreateAdminDto): Promise<Match>;
    update(id: number, payload: MatchUpdateAdminDto): Promise<Match>;
    delete(id: number): Promise<void>;
}
