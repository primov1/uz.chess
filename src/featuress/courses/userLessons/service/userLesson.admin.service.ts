import { Injectable, NotFoundException } from '@nestjs/common';
import { plainToInstance } from 'class-transformer';
import { UserLesson } from '../entities/userLesson.entity';
import { UserLessonListAdminDto } from '../dtos/admin/userLesson.list.admin.dto';
import { UserLessonDetailAdminDto } from '../dtos/admin/userLesson.detail.admin.dto';
import { UserLessonCreateAdminDto } from '../dtos/admin/userLesson.create.admin.dto';
import { UserLessonUpdateAdminDto } from '../dtos/admin/userLesson.update.admin.dto';

@Injectable()
export class UserLessonAdminService {
  async getAll() {
    const items = await UserLesson.find();
    return plainToInstance(UserLessonListAdminDto, items, {
      excludeExtraneousValues: true,
    });
  }
  async getOne(id: number) {
    const item = await UserLesson.findOneBy({ id });
    if (!item)
      throw new NotFoundException('UserLesson with given id not found');
    return plainToInstance(UserLessonDetailAdminDto, item, {
      excludeExtraneousValues: true,
    });
  }
  async create(payload: UserLessonCreateAdminDto) {
    const item = UserLesson.create(payload as UserLesson);
    return UserLesson.save(item);
  }
  async update(id: number, payload: UserLessonUpdateAdminDto) {
    const item = await UserLesson.findOneBy({ id });
    if (!item)
      throw new NotFoundException('UserLesson with given id not found');
    Object.assign(
      item,
      Object.fromEntries(
        Object.entries(payload).filter(([, v]) => v !== undefined),
      ),
    );
    return UserLesson.save(item);
  }
  async delete(id: number) {
    const item = await UserLesson.findOneBy({ id });
    if (!item)
      throw new NotFoundException('UserLesson with given id not found');
    await UserLesson.remove(item);
  }
}
