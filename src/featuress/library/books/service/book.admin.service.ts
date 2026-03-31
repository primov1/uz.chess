import { Injectable, NotFoundException } from '@nestjs/common';
import { plainToInstance } from 'class-transformer';
import { Book } from '../entities/book.entity';
import { BookListAdminDto } from '../dtos/admin/book.list.admin.dto';
import { BookDetailAdminDto } from '../dtos/admin/book.detail.admin.dto';
import { BookCreateAdminDto } from '../dtos/admin/book.create.admin.dto';
import { BookUpdateAdminDto } from '../dtos/admin/book.update.admin.dto';

@Injectable()
export class BookAdminService {
  async getAll(): Promise<BookListAdminDto[]> {
    const books = await Book.find();
    return plainToInstance(BookListAdminDto, books, {
      excludeExtraneousValues: true,
    });
  }

  async getOne(id: number): Promise<BookDetailAdminDto> {
    const book = await Book.findOneBy({ id });
    if (!book) throw new NotFoundException('Book with given id not found');
    return plainToInstance(BookDetailAdminDto, book, {
      excludeExtraneousValues: true,
    });
  }

  async create(payload: BookCreateAdminDto): Promise<Book> {
    const book = Book.create(payload as Book);
    return Book.save(book);
  }

  async update(id: number, payload: BookUpdateAdminDto): Promise<Book> {
    const book = await Book.findOneBy({ id });
    if (!book) throw new NotFoundException('Book with given id not found');
    Object.assign(
      book,
      Object.fromEntries(
        Object.entries(payload).filter(([, v]) => v !== undefined),
      ),
    );
    return Book.save(book);
  }

  async delete(id: number): Promise<void> {
    const book = await Book.findOneBy({ id });
    if (!book) throw new NotFoundException('Book with given id not found');
    await Book.remove(book);
  }
}
