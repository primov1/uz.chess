import { Injectable, NotFoundException } from '@nestjs/common';
import { plainToInstance } from 'class-transformer';
import { Match } from '../entities/match.entity';
import { MatchListPublicDto } from '../dtos/public/match.list.public.dto';
import { MatchDetailPublicDto } from '../dtos/public/match.detail.public.dto';

@Injectable()
export class MatchPublicService {
  async getAll(): Promise<MatchListPublicDto[]> {
    const matches = await Match.find();
    return plainToInstance(MatchListPublicDto, matches, { excludeExtraneousValues: true });
  }

  async getOne(id: number): Promise<MatchDetailPublicDto> {
    const match = await Match.findOneBy({ id });
    if (!match) throw new NotFoundException('Match with given id not found');
    return plainToInstance(MatchDetailPublicDto, match, { excludeExtraneousValues: true });
  }
}
