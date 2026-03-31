import { Injectable, NotFoundException } from '@nestjs/common';
import { plainToInstance } from 'class-transformer';
import { CourseReview } from '../entities/courseReview.entity';
import { CourseReviewListPublicDto } from '../dtos/public/courseReview.list.public.dto';
import { CourseReviewDetailPublicDto } from '../dtos/public/courseReview.detail.public.dto';

@Injectable()
export class CourseReviewPublicService {
  async getAll() {
    const items = await CourseReview.find();
    return plainToInstance(CourseReviewListPublicDto, items, {
      excludeExtraneousValues: true,
    });
  }
  async getOne(id: number) {
    const item = await CourseReview.findOneBy({ id });
    if (!item)
      throw new NotFoundException('CourseReview with given id not found');
    return plainToInstance(CourseReviewDetailPublicDto, item, {
      excludeExtraneousValues: true,
    });
  }
}
