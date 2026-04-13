import { Injectable, NotFoundException } from '@nestjs/common';
import { plainToInstance } from 'class-transformer';
import { Difficulty } from '../entities/difficulty.entity';
import { DifficultyListAdminDto } from '../dtos/admin/difficulty.list.admin.dto';
import { DifficultyDetailAdminDto } from '../dtos/admin/difficulty.detail.admin.dto';
import { DifficultyCreateAdminDto } from '../dtos/admin/difficulty.create.admin.dto';
import { DifficultyUpdateAdminDto } from '../dtos/admin/difficulty.update.admin.dto';

@Injectable()
export class DifficultyAdminService {
  async getAll(): Promise<DifficultyListAdminDto[]> {
    const items = await Difficulty.find();

    return plainToInstance(DifficultyListAdminDto, items, {
      excludeExtraneousValues: true,
    });
  }

  async getOne(id: number): Promise<DifficultyDetailAdminDto> {
    const item = await Difficulty.findOneBy({ id });
    if (!item)
      throw new NotFoundException('Difficulty with given id not found');
    return plainToInstance(DifficultyDetailAdminDto, item, {
      excludeExtraneousValues: true,
    });
  }

  async create(payload: DifficultyCreateAdminDto): Promise<Difficulty> {
    const item = Difficulty.create(payload as Difficulty);
    return Difficulty.save(item);
  }

  async update(
    id: number,
    payload: DifficultyUpdateAdminDto,
  ): Promise<Difficulty> {
    const item = await Difficulty.findOneBy({ id });
    if (!item)
      throw new NotFoundException('Difficulty with given id not found');
    Object.assign(
      item,
      Object.fromEntries(
        Object.entries(payload).filter(([, v]) => v !== undefined),
      ),
    );
    return Difficulty.save(item);
  }

  async delete(id: number): Promise<void> {
    const item = await Difficulty.findOneBy({ id });
    if (!item)
      throw new NotFoundException('Difficulty with given id not found');
    await Difficulty.remove(item);
  }
}
