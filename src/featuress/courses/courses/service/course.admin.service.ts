import { Injectable, NotFoundException } from '@nestjs/common';
import { plainToInstance } from 'class-transformer';
import { Course } from '../entities/course.entity';
import { CourseListAdminDto } from '../dtos/admin/course.list.admin.dto';
import { CourseDetailAdminDto } from '../dtos/admin/course.detail.admin.dto';
import { CourseCreateAdminDto } from '../dtos/admin/course.create.admin.dto';
import { CourseUpdateAdminDto } from '../dtos/admin/course.update.admin.dto';

@Injectable()
export class CourseAdminService {
  async getAll() {
    const items = await Course.find();
    return plainToInstance(CourseListAdminDto, items, {
      excludeExtraneousValues: true,
    });
  }
  async getOne(id: number) {
    const item = await Course.findOneBy({ id });
    if (!item) throw new NotFoundException('Course with given id not found');
    return plainToInstance(CourseDetailAdminDto, item, {
      excludeExtraneousValues: true,
    });
  }
  async create(payload: CourseCreateAdminDto) {
    const item = Course.create(payload as Course);
    return Course.save(item);
  }
  async update(id: number, payload: CourseUpdateAdminDto) {
    const item = await Course.findOneBy({ id });
    if (!item) throw new NotFoundException('Course with given id not found');
    Object.assign(
      item,
      Object.fromEntries(
        Object.entries(payload).filter(([, v]) => v !== undefined),
      ),
    );
    return Course.save(item);
  }
  async delete(id: number) {
    const item = await Course.findOneBy({ id });
    if (!item) throw new NotFoundException('Course with given id not found');
    await Course.remove(item);
  }
}
