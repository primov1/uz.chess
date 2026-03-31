import { Injectable, NotFoundException } from '@nestjs/common';
import { plainToInstance } from 'class-transformer';
import { CourseCategory } from '../entities/courseCategory.entity';
import { CourseCategoryListPublicDto } from '../dtos/public/courseCategory.list.public.dto';
import { CourseCategoryDetailPublicDto } from '../dtos/public/courseCategory.detail.public.dto';

@Injectable()
export class CourseCategoryPublicService {
  async getAll() {
    const items = await CourseCategory.find();
    return plainToInstance(CourseCategoryListPublicDto, items, {
      excludeExtraneousValues: true,
    });
  }
  async getOne(id: number) {
    const item = await CourseCategory.findOneBy({ id });
    if (!item)
      throw new NotFoundException('CourseCategory with given id not found');
    return plainToInstance(CourseCategoryDetailPublicDto, item, {
      excludeExtraneousValues: true,
    });
  }
}
