import { Injectable, NotFoundException } from '@nestjs/common';
import { plainToInstance } from 'class-transformer';
import { ReportCategory } from '../entities/reportCategory.entity';
import { ReportCategoryListAdminDto } from '../dtos/admin/reportCategory.list.admin.dto';
import { ReportCategoryDetailAdminDto } from '../dtos/admin/reportCategory.detail.admin.dto';
import { ReportCategoryCreateAdminDto } from '../dtos/admin/reportCategory.create.admin.dto';
import { ReportCategoryUpdateAdminDto } from '../dtos/admin/reportCategory.update.admin.dto';

@Injectable()
export class ReportCategoryAdminService {
  async getAll() {
    const items = await ReportCategory.find();
    return plainToInstance(ReportCategoryListAdminDto, items, {
      excludeExtraneousValues: true,
    });
  }
  async getOne(id: number) {
    const item = await ReportCategory.findOneBy({ id });
    if (!item)
      throw new NotFoundException('ReportCategory with given id not found');
    return plainToInstance(ReportCategoryDetailAdminDto, item, {
      excludeExtraneousValues: true,
    });
  }
  async create(payload: ReportCategoryCreateAdminDto) {
    const item = ReportCategory.create(payload as ReportCategory);
    return ReportCategory.save(item);
  }
  async update(id: number, payload: ReportCategoryUpdateAdminDto) {
    const item = await ReportCategory.findOneBy({ id });
    if (!item)
      throw new NotFoundException('ReportCategory with given id not found');
    Object.assign(
      item,
      Object.fromEntries(
        Object.entries(payload).filter(([, v]) => v !== undefined),
      ),
    );
    return ReportCategory.save(item);
  }
  async delete(id: number) {
    const item = await ReportCategory.findOneBy({ id });
    if (!item)
      throw new NotFoundException('ReportCategory with given id not found');
    await ReportCategory.remove(item);
  }
}
