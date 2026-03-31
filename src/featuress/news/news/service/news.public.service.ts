import { Injectable, NotFoundException } from '@nestjs/common';
import { plainToInstance } from 'class-transformer';
import { News } from '../entities/news.entity';
import { NewsListPublicDto } from '../dtos/public/news.list.public.dto';
import { NewsDetailPublicDto } from '../dtos/public/news.detail.public.dto';

@Injectable()
export class NewsPublicService {
  async getAll(): Promise<NewsListPublicDto[]> {
    const items = await News.find({ order: { date: 'DESC' } });
    return plainToInstance(NewsListPublicDto, items, {
      excludeExtraneousValues: true,
    });
  }

  async getOne(id: number): Promise<NewsDetailPublicDto> {
    const item = await News.findOneBy({ id });
    if (!item) throw new NotFoundException('News with given id not found');
    return plainToInstance(NewsDetailPublicDto, item, {
      excludeExtraneousValues: true,
    });
  }
}
