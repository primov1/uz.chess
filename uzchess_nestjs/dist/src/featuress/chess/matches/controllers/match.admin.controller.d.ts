import { MatchAdminService } from '../service/match.admin.service';
import { MatchListAdminDto } from '../dtos/admin/match.list.admin.dto';
import { MatchDetailAdminDto } from '../dtos/admin/match.detail.admin.dto';
import { MatchCreateAdminDto } from '../dtos/admin/match.create.admin.dto';
import { MatchUpdateAdminDto } from '../dtos/admin/match.update.admin.dto';
export declare class MatchAdminController {
    private readonly matchAdminService;
    constructor(matchAdminService: MatchAdminService);
    getAll(): Promise<MatchListAdminDto[]>;
    getOne(id: number): Promise<MatchDetailAdminDto>;
    create(payload: MatchCreateAdminDto): Promise<import("../entities/match.entity").Match>;
    update(id: number, payload: MatchUpdateAdminDto): Promise<import("../entities/match.entity").Match>;
    delete(id: number): Promise<void>;
}
