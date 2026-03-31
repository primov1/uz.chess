import { Injectable, NotFoundException } from '@nestjs/common';
import { plainToInstance } from 'class-transformer';
import { CourseReview } from '../entities/courseReview.entity';
import { CourseReviewListAdminDto } from '../dtos/admin/courseReview.list.admin.dto';
import { CourseReviewDetailAdminDto } from '../dtos/admin/courseReview.detail.admin.dto';
import { CourseReviewCreateAdminDto } from '../dtos/admin/courseReview.create.admin.dto';
import { CourseReviewUpdateAdminDto } from '../dtos/admin/courseReview.update.admin.dto';

@Injectable()
export class CourseReviewAdminService {
  async getAll() {
    const items = await CourseReview.find();
    return plainToInstance(CourseReviewListAdminDto, items, {
      excludeExtraneousValues: true,
    });
  }
  async getOne(id: number) {
    const item = await CourseReview.findOneBy({ id });
    if (!item)
      throw new NotFoundException('CourseReview with given id not found');
    return plainToInstance(CourseReviewDetailAdminDto, item, {
      excludeExtraneousValues: true,
    });
  }
  async create(payload: CourseReviewCreateAdminDto) {
    const item = CourseReview.create(payload as CourseReview);
    return CourseReview.save(item);
  }
  async update(id: number, payload: CourseReviewUpdateAdminDto) {
    const item = await CourseReview.findOneBy({ id });
    if (!item)
      throw new NotFoundException('CourseReview with given id not found');
    Object.assign(
      item,
      Object.fromEntries(
        Object.entries(payload).filter(([, v]) => v !== undefined),
      ),
    );
    return CourseReview.save(item);
  }
  async delete(id: number) {
    const item = await CourseReview.findOneBy({ id });
    if (!item)
      throw new NotFoundException('CourseReview with given id not found');
    await CourseReview.remove(item);
  }
}
