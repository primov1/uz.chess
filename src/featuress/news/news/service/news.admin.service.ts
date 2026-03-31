import { Injectable, NotFoundException } from '@nestjs/common';
import { plainToInstance } from 'class-transformer';
import { News } from '../entities/news.entity';
import { NewsListAdminDto } from '../dtos/admin/news.list.admin.dto';
import { NewsDetailAdminDto } from '../dtos/admin/news.detail.admin.dto';
import { NewsCreateAdminDto } from '../dtos/admin/news.create.admin.dto';
import { NewsUpdateAdminDto } from '../dtos/admin/news.update.admin.dto';

@Injectable()
export class NewsAdminService {
  async getAll(): Promise<NewsListAdminDto[]> {
    const items = await News.find({ order: { date: 'DESC' } });
    return plainToInstance(NewsListAdminDto, items, {
      excludeExtraneousValues: true,
    });
  }

  async getOne(id: number): Promise<NewsDetailAdminDto> {
    const item = await News.findOneBy({ id });
    if (!item) throw new NotFoundException('News with given id not found');
    return plainToInstance(NewsDetailAdminDto, item, {
      excludeExtraneousValues: true,
    });
  }

  async create(payload: NewsCreateAdminDto): Promise<News> {
    const item = News.create(payload as News);
    return News.save(item);
  }

  async update(id: number, payload: NewsUpdateAdminDto): Promise<News> {
    const item = await News.findOneBy({ id });
    if (!item) throw new NotFoundException('News with given id not found');
    Object.assign(
      item,
      Object.fromEntries(
        Object.entries(payload).filter(([, v]) => v !== undefined),
      ),
    );
    return News.save(item);
  }

  async delete(id: number): Promise<void> {
    const item = await News.findOneBy({ id });
    if (!item) throw new NotFoundException('News with given id not found');
    await News.remove(item);
  }
}
