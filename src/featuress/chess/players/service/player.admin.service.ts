import { Injectable, NotFoundException } from '@nestjs/common';
import { plainToInstance } from 'class-transformer';
import { Player } from '../entities/player.entity';
import { PlayerListAdminDto } from '../dtos/admin/player.list.admin.dto';
import { PlayerDetailAdminDto } from '../dtos/admin/player.detail.admin.dto';
import { PlayerCreateAdminDto } from '../dtos/admin/player.create.admin.dto';
import { PlayerUpdateAdminDto } from '../dtos/admin/player.update.admin.dto';

@Injectable()
export class PlayerAdminService {
  async getAll(): Promise<PlayerListAdminDto[]> {
    const players = await Player.find();
    return plainToInstance(PlayerListAdminDto, players, { excludeExtraneousValues: true });
  }

  async getOne(id: number): Promise<PlayerDetailAdminDto> {
    const player = await Player.findOneBy({ id });
    if (!player) throw new NotFoundException('Player with given id not found');
    return plainToInstance(PlayerDetailAdminDto, player, { excludeExtraneousValues: true });
  }

  async create(payload: PlayerCreateAdminDto, file?: Express.Multer.File): Promise<Player> {
    const player = Player.create(payload as Player);
    if (file) player.image = `/uploads/${file.filename}`;
    return Player.save(player);
  }

  async update(id: number, payload: PlayerUpdateAdminDto, file?: Express.Multer.File): Promise<Player> {
    const player = await Player.findOneBy({ id });
    if (!player) throw new NotFoundException('Player with given id not found');
    Object.assign(player, Object.fromEntries(Object.entries(payload).filter(([, v]) => v !== undefined)));
    if (file) player.image = `/uploads/${file.filename}`;
    return Player.save(player);
  }

  async delete(id: number): Promise<void> {
    const player = await Player.findOneBy({ id });
    if (!player) throw new NotFoundException('Player with given id not found');
    await Player.remove(player);
  }
}
