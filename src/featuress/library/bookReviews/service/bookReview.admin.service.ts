import { Injectable, NotFoundException } from '@nestjs/common';
import { plainToInstance } from 'class-transformer';
import { BookReview } from '../entities/bookReview.entity';
import { BookReviewListAdminDto } from '../dtos/admin/bookReview.list.admin.dto';
import { BookReviewDetailAdminDto } from '../dtos/admin/bookReview.detail.admin.dto';
import { BookReviewCreateAdminDto } from '../dtos/admin/bookReview.create.admin.dto';
import { BookReviewUpdateAdminDto } from '../dtos/admin/bookReview.update.admin.dto';

@Injectable()
export class BookReviewAdminService {
  async getAll(): Promise<BookReviewListAdminDto[]> {
    const items = await BookReview.find();
    return plainToInstance(BookReviewListAdminDto, items, {
      excludeExtraneousValues: true,
    });
  }

  async getOne(id: number): Promise<BookReviewDetailAdminDto> {
    const item = await BookReview.findOneBy({ id });
    if (!item)
      throw new NotFoundException('BookReview with given id not found');
    return plainToInstance(BookReviewDetailAdminDto, item, {
      excludeExtraneousValues: true,
    });
  }

  async create(payload: BookReviewCreateAdminDto): Promise<BookReview> {
    const item = BookReview.create(payload as BookReview);
    return BookReview.save(item);
  }

  async update(
    id: number,
    payload: BookReviewUpdateAdminDto,
  ): Promise<BookReview> {
    const item = await BookReview.findOneBy({ id });
    if (!item)
      throw new NotFoundException('BookReview with given id not found');
    Object.assign(
      item,
      Object.fromEntries(
        Object.entries(payload).filter(([, v]) => v !== undefined),
      ),
    );
    return BookReview.save(item);
  }

  async delete(id: number): Promise<void> {
    const item = await BookReview.findOneBy({ id });
    if (!item)
      throw new NotFoundException('BookReview with given id not found');
    await BookReview.remove(item);
  }
}
