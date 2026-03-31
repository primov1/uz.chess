import { Injectable, NotFoundException } from '@nestjs/common';
import { plainToInstance } from 'class-transformer';
import { PurchasedCourse } from '../entities/purchasedCourse.entity';
import { PurchasedCourseListPublicDto } from '../dtos/public/purchasedCourse.list.public.dto';
import { PurchasedCourseDetailPublicDto } from '../dtos/public/purchasedCourse.detail.public.dto';

@Injectable()
export class PurchasedCoursePublicService {
  async getAll() {
    const items = await PurchasedCourse.find();
    return plainToInstance(PurchasedCourseListPublicDto, items, {
      excludeExtraneousValues: true,
    });
  }
  async getOne(id: number) {
    const item = await PurchasedCourse.findOneBy({ id });
    if (!item)
      throw new NotFoundException('PurchasedCourse with given id not found');
    return plainToInstance(PurchasedCourseDetailPublicDto, item, {
      excludeExtraneousValues: true,
    });
  }
}
