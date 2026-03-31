import { Injectable, NotFoundException } from '@nestjs/common';
import { plainToInstance } from 'class-transformer';
import { BookCategory } from '../entities/bookCategory.entity';
import { BookCategoryListPublicDto } from '../dtos/public/bookCategory.list.public.dto';
import { BookCategoryDetailPublicDto } from '../dtos/public/bookCategory.detail.public.dto';

@Injectable()
export class BookCategoryPublicService {
  async getAll() {
    const items = await BookCategory.find();
    return plainToInstance(BookCategoryListPublicDto, items, {
      excludeExtraneousValues: true,
    });
  }

  async getOne(id: number) {
    const item = await BookCategory.findOneBy({ id });
    if (!item) throw new NotFoundException('BookCategory with given id not found');
    return plainToInstance(BookCategoryDetailPublicDto, item, {
      excludeExtraneousValues: true,
    });
  }
}
