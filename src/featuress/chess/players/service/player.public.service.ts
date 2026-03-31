import { Injectable, NotFoundException } from '@nestjs/common';
import { plainToInstance } from 'class-transformer';
import { Player } from '../entities/player.entity';
import { PlayerListPublicDto } from '../dtos/public/player.list.public.dto';
import { PlayerDetailPublicDto } from '../dtos/public/player.detail.public.dto';

@Injectable()
export class PlayerPublicService {
  async getAll(): Promise<PlayerListPublicDto[]> {
    const players = await Player.find();
    return plainToInstance(PlayerListPublicDto, players, { excludeExtraneousValues: true });
  }

  async getOne(id: number): Promise<PlayerDetailPublicDto> {
    const player = await Player.findOneBy({ id });
    if (!player) throw new NotFoundException('Player with given id not found');
    return plainToInstance(PlayerDetailPublicDto, player, { excludeExtraneousValues: true });
  }
}
