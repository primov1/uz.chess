import { Injectable, NotFoundException } from '@nestjs/common';
import { plainToInstance } from 'class-transformer';
import { CourseSection } from '../entities/courseSection.entity';
import { CourseSectionListPublicDto } from '../dtos/public/courseSection.list.public.dto';
import { CourseSectionDetailPublicDto } from '../dtos/public/courseSection.detail.public.dto';

@Injectable()
export class CourseSectionPublicService {
  async getAll() {
    const items = await CourseSection.find();
    return plainToInstance(CourseSectionListPublicDto, items, {
      excludeExtraneousValues: true,
    });
  }
  async getOne(id: number) {
    const item = await CourseSection.findOneBy({ id });
    if (!item)
      throw new NotFoundException('CourseSection with given id not found');
    return plainToInstance(CourseSectionDetailPublicDto, item, {
      excludeExtraneousValues: true,
    });
  }
}
