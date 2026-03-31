import { Injectable, NotFoundException } from '@nestjs/common';
import { plainToInstance } from 'class-transformer';
import { Match } from '../entities/match.entity';
import { MatchListAdminDto } from '../dtos/admin/match.list.admin.dto';
import { MatchDetailAdminDto } from '../dtos/admin/match.detail.admin.dto';
import { MatchCreateAdminDto } from '../dtos/admin/match.create.admin.dto';
import { MatchUpdateAdminDto } from '../dtos/admin/match.update.admin.dto';

@Injectable()
export class MatchAdminService {
  async getAll(): Promise<MatchListAdminDto[]> {
    const matches = await Match.find();
    return plainToInstance(MatchListAdminDto, matches, { excludeExtraneousValues: true });
  }

  async getOne(id: number): Promise<MatchDetailAdminDto> {
    const match = await Match.findOneBy({ id });
    if (!match) throw new NotFoundException('Match with given id not found');
    return plainToInstance(MatchDetailAdminDto, match, { excludeExtraneousValues: true });
  }

  async create(payload: MatchCreateAdminDto): Promise<Match> {
    const match = Match.create(payload as Match);
    return Match.save(match);
  }

  async update(id: number, payload: MatchUpdateAdminDto): Promise<Match> {
    const match = await Match.findOneBy({ id });
    if (!match) throw new NotFoundException('Match with given id not found');
    Object.assign(match, Object.fromEntries(Object.entries(payload).filter(([, v]) => v !== undefined)));
    return Match.save(match);
  }

  async delete(id: number): Promise<void> {
    const match = await Match.findOneBy({ id });
    if (!match) throw new NotFoundException('Match with given id not found');
    await Match.remove(match);
  }
}
