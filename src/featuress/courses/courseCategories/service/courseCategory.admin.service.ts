import { Injectable, NotFoundException } from '@nestjs/common';
import { plainToInstance } from 'class-transformer';
import { CourseCategory } from '../entities/courseCategory.entity';
import { CourseCategoryListAdminDto } from '../dtos/admin/courseCategory.list.admin.dto';
import { CourseCategoryDetailAdminDto } from '../dtos/admin/courseCategory.detail.admin.dto';
import { CourseCategoryCreateAdminDto } from '../dtos/admin/courseCategory.create.admin.dto';
import { CourseCategoryUpdateAdminDto } from '../dtos/admin/courseCategory.update.admin.dto';

@Injectable()
export class CourseCategoryAdminService {
  async getAll() {
    const items = await CourseCategory.find();
    return plainToInstance(CourseCategoryListAdminDto, items, {
      excludeExtraneousValues: true,
    });
  }
  async getOne(id: number) {
    const item = await CourseCategory.findOneBy({ id });
    if (!item)
      throw new NotFoundException('CourseCategory with given id not found');
    return plainToInstance(CourseCategoryDetailAdminDto, item, {
      excludeExtraneousValues: true,
    });
  }
  async create(payload: CourseCategoryCreateAdminDto) {
    const item = CourseCategory.create(payload as CourseCategory);
    return CourseCategory.save(item);
  }
  async update(id: number, payload: CourseCategoryUpdateAdminDto) {
    const item = await CourseCategory.findOneBy({ id });
    if (!item)
      throw new NotFoundException('CourseCategory with given id not found');
    Object.assign(
      item,
      Object.fromEntries(
        Object.entries(payload).filter(([, v]) => v !== undefined),
      ),
    );
    return CourseCategory.save(item);
  }
  async delete(id: number) {
    const item = await CourseCategory.findOneBy({ id });
    if (!item)
      throw new NotFoundException('CourseCategory with given id not found');
    await CourseCategory.remove(item);
  }
}
