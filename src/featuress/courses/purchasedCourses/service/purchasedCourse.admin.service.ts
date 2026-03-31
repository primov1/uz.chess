import { Injectable, NotFoundException } from '@nestjs/common';
import { plainToInstance } from 'class-transformer';
import { PurchasedCourse } from '../entities/purchasedCourse.entity';
import { PurchasedCourseListAdminDto } from '../dtos/admin/purchasedCourse.list.admin.dto';
import { PurchasedCourseDetailAdminDto } from '../dtos/admin/purchasedCourse.detail.admin.dto';
import { PurchasedCourseCreateAdminDto } from '../dtos/admin/purchasedCourse.create.admin.dto';
import { PurchasedCourseUpdateAdminDto } from '../dtos/admin/purchasedCourse.update.admin.dto';

@Injectable()
export class PurchasedCourseAdminService {
  async getAll() {
    const items = await PurchasedCourse.find();
    return plainToInstance(PurchasedCourseListAdminDto, items, {
      excludeExtraneousValues: true,
    });
  }
  async getOne(id: number) {
    const item = await PurchasedCourse.findOneBy({ id });
    if (!item)
      throw new NotFoundException('PurchasedCourse with given id not found');
    return plainToInstance(PurchasedCourseDetailAdminDto, item, {
      excludeExtraneousValues: true,
    });
  }
  async create(payload: PurchasedCourseCreateAdminDto) {
    const item = PurchasedCourse.create(payload as PurchasedCourse);
    return PurchasedCourse.save(item);
  }
  async update(id: number, payload: PurchasedCourseUpdateAdminDto) {
    const item = await PurchasedCourse.findOneBy({ id });
    if (!item)
      throw new NotFoundException('PurchasedCourse with given id not found');
    Object.assign(
      item,
      Object.fromEntries(
        Object.entries(payload).filter(([, v]) => v !== undefined),
      ),
    );
    return PurchasedCourse.save(item);
  }
  async delete(id: number) {
    const item = await PurchasedCourse.findOneBy({ id });
    if (!item)
      throw new NotFoundException('PurchasedCourse with given id not found');
    await PurchasedCourse.remove(item);
  }
}
