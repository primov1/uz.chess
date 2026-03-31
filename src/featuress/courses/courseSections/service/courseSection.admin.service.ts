import { Injectable, NotFoundException } from '@nestjs/common';
import { plainToInstance } from 'class-transformer';
import { CourseSection } from '../entities/courseSection.entity';
import { CourseSectionListAdminDto } from '../dtos/admin/courseSection.list.admin.dto';
import { CourseSectionDetailAdminDto } from '../dtos/admin/courseSection.detail.admin.dto';
import { CourseSectionCreateAdminDto } from '../dtos/admin/courseSection.create.admin.dto';
import { CourseSectionUpdateAdminDto } from '../dtos/admin/courseSection.update.admin.dto';

@Injectable()
export class CourseSectionAdminService {
  async getAll() {
    const items = await CourseSection.find();
    return plainToInstance(CourseSectionListAdminDto, items, {
      excludeExtraneousValues: true,
    });
  }
  async getOne(id: number) {
    const item = await CourseSection.findOneBy({ id });
    if (!item)
      throw new NotFoundException('CourseSection with given id not found');
    return plainToInstance(CourseSectionDetailAdminDto, item, {
      excludeExtraneousValues: true,
    });
  }
  async create(payload: CourseSectionCreateAdminDto) {
    const item = CourseSection.create(payload as CourseSection);
    return CourseSection.save(item);
  }
  async update(id: number, payload: CourseSectionUpdateAdminDto) {
    const item = await CourseSection.findOneBy({ id });
    if (!item)
      throw new NotFoundException('CourseSection with given id not found');
    Object.assign(
      item,
      Object.fromEntries(
        Object.entries(payload).filter(([, v]) => v !== undefined),
      ),
    );
    return CourseSection.save(item);
  }
  async delete(id: number) {
    const item = await CourseSection.findOneBy({ id });
    if (!item)
      throw new NotFoundException('CourseSection with given id not found');
    await CourseSection.remove(item);
  }
}
