import { Injectable, NotFoundException } from '@nestjs/common';
import { plainToInstance } from 'class-transformer';
import { CourseLesson } from '../entities/courseLesson.entity';
import { CourseLessonListPublicDto } from '../dtos/public/courseLesson.list.public.dto';
import { CourseLessonDetailPublicDto } from '../dtos/public/courseLesson.detail.public.dto';

@Injectable()
export class CourseLessonPublicService {
  async getAll() {
    const items = await CourseLesson.find();
    return plainToInstance(CourseLessonListPublicDto, items, {
      excludeExtraneousValues: true,
    });
  }
  async getOne(id: number) {
    const item = await CourseLesson.findOneBy({ id });
    if (!item)
      throw new NotFoundException('CourseLesson with given id not found');
    return plainToInstance(CourseLessonDetailPublicDto, item, {
      excludeExtraneousValues: true,
    });
  }
}
