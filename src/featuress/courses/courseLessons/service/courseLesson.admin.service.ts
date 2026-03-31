import { Injectable, NotFoundException } from '@nestjs/common';
import { plainToInstance } from 'class-transformer';
import { CourseLesson } from '../entities/courseLesson.entity';
import { CourseLessonListAdminDto } from '../dtos/admin/courseLesson.list.admin.dto';
import { CourseLessonDetailAdminDto } from '../dtos/admin/courseLesson.detail.admin.dto';
import { CourseLessonCreateAdminDto } from '../dtos/admin/courseLesson.create.admin.dto';
import { CourseLessonUpdateAdminDto } from '../dtos/admin/courseLesson.update.admin.dto';

@Injectable()
export class CourseLessonAdminService {
  async getAll() {
    const items = await CourseLesson.find();
    return plainToInstance(CourseLessonListAdminDto, items, {
      excludeExtraneousValues: true,
    });
  }
  async getOne(id: number) {
    const item = await CourseLesson.findOneBy({ id });
    if (!item)
      throw new NotFoundException('CourseLesson with given id not found');
    return plainToInstance(CourseLessonDetailAdminDto, item, {
      excludeExtraneousValues: true,
    });
  }
  async create(payload: CourseLessonCreateAdminDto) {
    const item = CourseLesson.create(payload as CourseLesson);
    return CourseLesson.save(item);
  }
  async update(id: number, payload: CourseLessonUpdateAdminDto) {
    const item = await CourseLesson.findOneBy({ id });
    if (!item)
      throw new NotFoundException('CourseLesson with given id not found');
    Object.assign(
      item,
      Object.fromEntries(
        Object.entries(payload).filter(([, v]) => v !== undefined),
      ),
    );
    return CourseLesson.save(item);
  }
  async delete(id: number) {
    const item = await CourseLesson.findOneBy({ id });
    if (!item)
      throw new NotFoundException('CourseLesson with given id not found');
    await CourseLesson.remove(item);
  }
}
