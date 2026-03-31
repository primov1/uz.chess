import { Injectable, NotFoundException } from '@nestjs/common';
import { plainToInstance } from 'class-transformer';
import { BookReview } from '../entities/bookReview.entity';
import { BookReviewListPublicDto } from '../dtos/public/bookReview.list.public.dto';
import { BookReviewDetailPublicDto } from '../dtos/public/bookReview.detail.public.dto';

@Injectable()
export class BookReviewPublicService {
  async getAll(): Promise<BookReviewListPublicDto[]> {
    const items = await BookReview.find();
    return plainToInstance(BookReviewListPublicDto, items, {
      excludeExtraneousValues: true,
    });
  }

  async getOne(id: number): Promise<BookReviewDetailPublicDto> {
    const item = await BookReview.findOneBy({ id });
    if (!item)
      throw new NotFoundException('BookReview with given id not found');
    return plainToInstance(BookReviewDetailPublicDto, item, {
      excludeExtraneousValues: true,
    });
  }
}
