import { Injectable, NotFoundException } from '@nestjs/common';
import { plainToInstance } from 'class-transformer';
import { ReportCategory } from '../entities/reportCategory.entity';
import { ReportCategoryListPublicDto } from '../dtos/public/reportCategory.list.public.dto';
import { ReportCategoryDetailPublicDto } from '../dtos/public/reportCategory.detail.public.dto';

@Injectable()
export class ReportCategoryPublicService {
  async getAll() {
    const items = await ReportCategory.find();
    return plainToInstance(ReportCategoryListPublicDto, items, {
      excludeExtraneousValues: true,
    });
  }
  async getOne(id: number) {
    const item = await ReportCategory.findOneBy({ id });
    if (!item)
      throw new NotFoundException('ReportCategory with given id not found');
    return plainToInstance(ReportCategoryDetailPublicDto, item, {
      excludeExtraneousValues: true,
    });
  }
}
