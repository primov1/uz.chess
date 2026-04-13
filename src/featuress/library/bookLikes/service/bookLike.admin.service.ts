import { Injectable, NotFoundException } from '@nestjs/common';
import { plainToInstance } from 'class-transformer';
import { BookLike } from '../entities/bookLike.entity';
import { BookLikeListAdminDto } from '../dtos/admin/bookLike.list.admin.dto';
import { BookLikeDetailAdminDto } from '../dtos/admin/bookLike.detail.admin.dto';
import { BookLikeCreateAdminDto } from '../dtos/admin/bookLike.create.admin.dto';

@Injectable()
export class BookLikeAdminService {
  async getAll(): Promise<BookLikeListAdminDto[]> {
    const items = await BookLike.find();
    return plainToInstance(BookLikeListAdminDto, items, {
      excludeExtraneousValues: true,
    });
  }

  async getOne(id: number): Promise<BookLikeDetailAdminDto> {
    const item = await BookLike.findOneBy({ id });
    if (!item) throw new NotFoundException('BookLike with given id not found');
    return plainToInstance(BookLikeDetailAdminDto, item, {
      excludeExtraneousValues: true,
    });
  }

  async create(payload: BookLikeCreateAdminDto): Promise<BookLike> {
    const item = BookLike.create(payload as BookLike);
    return BookLike.save(item);
  }
  // async update(id: number, payload: BookLikeUpdateAdminDto): Promise<BookLike> {
  //   const item = await BookLike.findOneBy({ id });
  //   if (!item) throw new NotFoundException('BookLike with given id not found');
  //   Object.assign(
  //     item,
  //     Object.fromEntries(
  //       Object.entries(payload).filter(([, v]) => v !== undefined),
  //     ),
  //   );
  //   return BookLike.save(item);
  // }

  // async delete(id: number): Promise<void> {
  //   const item = await BookLike.findOneBy({ id });
  //   if (!item) throw new NotFoundException('BookLike with given id not found');
  //   await BookLike.remove(item);
  // }
}
