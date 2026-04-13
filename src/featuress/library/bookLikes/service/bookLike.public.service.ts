import { Injectable, NotFoundException } from '@nestjs/common';
import { plainToInstance } from 'class-transformer';
import { BookLike } from '../entities/bookLike.entity';
import { Book } from '../../books/entities/book.entity';
import { BookLikeListPublicDto } from '../dtos/public/bookLike.list.public.dto';
import { BookLikeDetailPublicDto } from '../dtos/public/bookLike.detail.public.dto';

@Injectable()
export class BookLikePublicService {
  async getAll(): Promise<BookLikeListPublicDto[]> {
    const items = await BookLike.find();
    return plainToInstance(BookLikeListPublicDto, items, {
      excludeExtraneousValues: true,
    });
  }

  async getOne(id: number): Promise<BookLikeDetailPublicDto> {
    const item = await BookLike.findOneBy({ id });
    if (!item) throw new NotFoundException('BookLike with given id not found');
    return plainToInstance(BookLikeDetailPublicDto, item, {
      excludeExtraneousValues: true,
    });
  }

  /**
   * Kitob like toggle:
   * - Agar foydalanuvchi bu kitobni avval like qilgan bo'lsa → unlike (o'chirish)
   * - Agar like qilmagan bo'lsa → like (qo'shish)
   * userId JWT tokendan (controller orqali) keladi
   */
  async toggle(bookId: number, userId: number) {
    const book = await Book.findOneBy({ id: bookId });
    if (!book) throw new NotFoundException(`Kitob topilmadi (id: ${bookId})`);

    const existing = await BookLike.findOne({ where: { bookId, userId } });

    if (existing) {
      await BookLike.remove(existing);
      // likesCount ni kamaytirish (0 dan past ketmasin)
      book.likesCount = Math.max(0, (book.likesCount || 0) - 1);
      await book.save();
      return {
        liked: false,
        likesCount: book.likesCount,
        message: 'Kitob likedan olib tashlandi',
      };
    }

    const like = BookLike.create({ bookId, userId } as BookLike);
    await like.save();

    // likesCount ni oshirish
    book.likesCount = (book.likesCount || 0) + 1;
    await book.save();

    return {
      liked: true,
      likesCount: book.likesCount,
      message: 'Kitob like qilindi',
      data: plainToInstance(BookLikeDetailPublicDto, like, {
        excludeExtraneousValues: true,
      }),
    };
  }

  /** Foydalanuvchining like qilgan kitoblarini qaytaradi */
  async getMyLikes(userId: number) {
    const items = await BookLike.find({ where: { userId } });
    return plainToInstance(BookLikeListPublicDto, items, {
      excludeExtraneousValues: true,
    });
  }
}
