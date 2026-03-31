import { Injectable, NotFoundException } from '@nestjs/common';
import { plainToInstance } from 'class-transformer';
import { Course } from '../entities/course.entity';
import { CourseListPublicDto } from '../dtos/public/course.list.public.dto';
import { CourseDetailPublicDto } from '../dtos/public/course.detail.public.dto';

@Injectable()
export class CoursePublicService {
  async getAll() {
    const items = await Course.find();
    return plainToInstance(CourseListPublicDto, items, { excludeExtraneousValues: true });
  }
  async getOne(id: number) {
    const item = await Course.findOneBy({ id });
    if (!item) throw new NotFoundException('Course with given id not found');
    return plainToInstance(CourseDetailPublicDto, item, { excludeExtraneousValues: true });
  }
}
