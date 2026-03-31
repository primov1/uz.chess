import { Injectable, NotFoundException } from '@nestjs/common';
import { plainToInstance } from 'class-transformer';
import { CourseLike } from '../entities/courseLike.entity';
import { CourseLikeListAdminDto } from '../dtos/admin/courseLike.list.admin.dto';
import { CourseLikeDetailAdminDto } from '../dtos/admin/courseLike.detail.admin.dto';
import { CourseLikeCreateAdminDto } from '../dtos/admin/courseLike.create.admin.dto';
import { CourseLikeUpdateAdminDto } from '../dtos/admin/courseLike.update.admin.dto';

@Injectable()
export class CourseLikeAdminService {
  async getAll() {
    const items = await CourseLike.find();
    return plainToInstance(CourseLikeListAdminDto, items, {
      excludeExtraneousValues: true,
    });
  }
  async getOne(id: number) {
    const item = await CourseLike.findOneBy({ id });
    if (!item)
      throw new NotFoundException('CourseLike with given id not found');
    return plainToInstance(CourseLikeDetailAdminDto, item, {
      excludeExtraneousValues: true,
    });
  }
  async create(payload: CourseLikeCreateAdminDto) {
    const item = CourseLike.create(payload as CourseLike);
    return CourseLike.save(item);
  }
  async update(id: number, payload: CourseLikeUpdateAdminDto) {
    const item = await CourseLike.findOneBy({ id });
    if (!item)
      throw new NotFoundException('CourseLike with given id not found');
    Object.assign(
      item,
      Object.fromEntries(
        Object.entries(payload).filter(([, v]) => v !== undefined),
      ),
    );
    return CourseLike.save(item);
  }
  async delete(id: number) {
    const item = await CourseLike.findOneBy({ id });
    if (!item)
      throw new NotFoundException('CourseLike with given id not found');
    await CourseLike.remove(item);
  }
}
