import { Injectable } from '@nestjs/common';
import { plainToInstance } from 'class-transformer';
import { NewsView } from '../entities/newsView.entity';
import { NewsViewListAdminDto } from '../dtos/admin/newsView.list.admin.dto';

@Injectable()
export class NewsViewAdminService {
  async getAll() {
    const items = await NewsView.find();
    return plainToInstance(NewsViewListAdminDto, items, {
      excludeExtraneousValues: true,
    });
  }
}
