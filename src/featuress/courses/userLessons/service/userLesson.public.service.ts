import { Injectable, NotFoundException } from '@nestjs/common';
import { plainToInstance } from 'class-transformer';
import { UserLesson } from '../entities/userLesson.entity';
import { UserLessonListPublicDto } from '../dtos/public/userLesson.list.public.dto';
import { UserLessonDetailPublicDto } from '../dtos/public/userLesson.detail.public.dto';

@Injectable()
export class UserLessonPublicService {
  async getAll() {
    const items = await UserLesson.find();
    return plainToInstance(UserLessonListPublicDto, items, {
      excludeExtraneousValues: true,
    });
  }
  async getOne(id: number) {
    const item = await UserLesson.findOneBy({ id });
    if (!item)
      throw new NotFoundException('UserLesson with given id not found');
    return plainToInstance(UserLessonDetailPublicDto, item, {
      excludeExtraneousValues: true,
    });
  }
}
