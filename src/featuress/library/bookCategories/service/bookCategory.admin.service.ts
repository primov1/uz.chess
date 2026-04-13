import { Injectable, NotFoundException } from '@nestjs/common';
import { plainToInstance } from 'class-transformer';
import { BookCategory } from '../entities/bookCategory.entity';
import { BookCategoryListAdminDto } from '../dtos/admin/bookCategory.list.admin.dto';
import { BookCategoryDetailAdminDto } from '../dtos/admin/bookCategory.detail.admin.dto';
import { BookCategoryCreateAdminDto } from '../dtos/admin/bookCategory.create.admin.dto';
import { BookCategoryUpdateAdminDto } from '../dtos/admin/bookCategory.update.admin.dto';

@Injectable()
export class BookCategoryAdminService {
  async getAll() {
    const items = await BookCategory.find();
    return plainToInstance(BookCategoryListAdminDto, items, {
      excludeExtraneousValues: true,
    });
  }

  async getOne(id: number) {
    const item = await BookCategory.findOneBy({ id });
    if (!item)
      throw new NotFoundException('BookCategory with given id not found');
    return plainToInstance(BookCategoryDetailAdminDto, item, {
      excludeExtraneousValues: true,
    });
  }

  async create(payload: BookCategoryCreateAdminDto) {
    const item = BookCategory.create(payload as BookCategory);
    return BookCategory.save(item);
  }

  async update(id: number, payload: BookCategoryUpdateAdminDto) {
    const item = await BookCategory.findOneBy({ id });
    if (!item)
      throw new NotFoundException('BookCategory with given id not found');
    Object.assign(
      item,
      Object.fromEntries(
        Object.entries(payload).filter(([, v]) => v !== undefined),
      ),
    );
    return BookCategory.save(item);
  }

  async delete(id: number) {
    const item = await BookCategory.findOneBy({ id });
    if (!item)
      throw new NotFoundException('BookCategory with given id not found');
    await BookCategory.remove(item);
  }
}
