import { Injectable, NotFoundException } from '@nestjs/common';
import { plainToInstance } from 'class-transformer';
import { Report } from '../entities/report.entity';
import { ReportListPublicDto } from '../dtos/public/report.list.public.dto';
import { ReportDetailPublicDto } from '../dtos/public/report.detail.public.dto';
import { ReportCreatePublicDto } from '../dtos/public/report.create.public.dto';

@Injectable()
export class ReportPublicService {
  async getAll() {
    const items = await Report.find();
    return plainToInstance(ReportListPublicDto, items, {
      excludeExtraneousValues: true,
    });
  }

  async getOne(id: number) {
    const item = await Report.findOneBy({ id });
    if (!item) throw new NotFoundException('Report with given id not found');
    return plainToInstance(ReportDetailPublicDto, item, {
      excludeExtraneousValues: true,
    });
  }

  // userId JWT tokendan (controller orqali) keladi
  async create(payload: ReportCreatePublicDto, userId: number) {
    const item = Report.create({ ...payload, userId } as Report);
    await Report.save(item);
    return plainToInstance(ReportDetailPublicDto, item, {
      excludeExtraneousValues: true,
    });
  }
}

