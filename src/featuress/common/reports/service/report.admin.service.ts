import { Injectable, NotFoundException } from '@nestjs/common';
import { plainToInstance } from 'class-transformer';
import { Report } from '../entities/report.entity';
import { ReportListAdminDto } from '../dtos/admin/report.list.admin.dto';
import { ReportDetailAdminDto } from '../dtos/admin/report.detail.admin.dto';
import { ReportCreateAdminDto } from '../dtos/admin/report.create.admin.dto';
import { ReportUpdateAdminDto } from '../dtos/admin/report.update.admin.dto';

@Injectable()
export class ReportAdminService {
  async getAll() {
    const items = await Report.find();
    return plainToInstance(ReportListAdminDto, items, {
      excludeExtraneousValues: true,
    });
  }
  async getOne(id: number) {
    const item = await Report.findOneBy({ id });
    if (!item) throw new NotFoundException('Report with given id not found');
    return plainToInstance(ReportDetailAdminDto, item, {
      excludeExtraneousValues: true,
    });
  }
  async create(payload: ReportCreateAdminDto) {
    const item = Report.create(payload as Report);
    return Report.save(item);
  }
  async update(id: number, payload: ReportUpdateAdminDto) {
    const item = await Report.findOneBy({ id });
    if (!item) throw new NotFoundException('Report with given id not found');
    Object.assign(
      item,
      Object.fromEntries(
        Object.entries(payload).filter(([, v]) => v !== undefined),
      ),
    );
    return Report.save(item);
  }
  async delete(id: number) {
    const item = await Report.findOneBy({ id });
    if (!item) throw new NotFoundException('Report with given id not found');
    await Report.remove(item);
  }
}
