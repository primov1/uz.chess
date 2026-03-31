import { Injectable, NotFoundException } from '@nestjs/common';
import { plainToInstance } from 'class-transformer';
import { Book } from '../entities/book.entity';
import { BookListPublicDto } from '../dtos/public/book.list.public.dto';
import { BookDetailPublicDto } from '../dtos/public/book.detail.public.dto';

@Injectable()
export class BookPublicService {
  async getAll(): Promise<BookListPublicDto[]> {
    const books = await Book.find();
    return plainToInstance(BookListPublicDto, books, {
      excludeExtraneousValues: true,
    });
  }

  async getOne(id: number): Promise<BookDetailPublicDto> {
    const book = await Book.findOneBy({ id });
    if (!book) throw new NotFoundException('Book with given id not found');
    return plainToInstance(BookDetailPublicDto, book, {
      excludeExtraneousValues: true,
    });
  }
}
