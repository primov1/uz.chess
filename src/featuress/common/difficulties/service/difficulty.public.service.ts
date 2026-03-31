import { Injectable, NotFoundException } from '@nestjs/common';
import { plainToInstance } from 'class-transformer';
import { Difficulty } from '../entities/difficulty.entity';
import { DifficultyListPublicDto } from '../dtos/public/difficulty.list.public.dto';
import { DifficultyDetailPublicDto } from '../dtos/public/difficulty.detail.public.dto';

@Injectable()
export class DifficultyPublicService {
  async getAll(): Promise<DifficultyListPublicDto[]> {
    const items = await Difficulty.find();
    return plainToInstance(DifficultyListPublicDto, items, {
      excludeExtraneousValues: true,
    });
  }

  async getOne(id: number): Promise<DifficultyDetailPublicDto> {
    const item = await Difficulty.findOneBy({ id });
    if (!item)
      throw new NotFoundException('Difficulty with given id not found');
    return plainToInstance(DifficultyDetailPublicDto, item, {
      excludeExtraneousValues: true,
    });
  }
}
