import { Injectable, NotFoundException } from '@nestjs/common';
import { plainToInstance } from 'class-transformer';
import { CourseLike } from '../entities/courseLike.entity';
import { Course } from '../../courses/entities/course.entity';
import { CourseLikeListPublicDto } from '../dtos/public/courseLike.list.public.dto';
import { CourseLikeDetailPublicDto } from '../dtos/public/courseLike.detail.public.dto';

@Injectable()
export class CourseLikePublicService {
  async getAll() {
    const items = await CourseLike.find();
    return plainToInstance(CourseLikeListPublicDto, items, {
      excludeExtraneousValues: true,
    });
  }

  async getOne(id: number) {
    const item = await CourseLike.findOneBy({ id });
    if (!item)
      throw new NotFoundException('CourseLike with given id not found');
    return plainToInstance(CourseLikeDetailPublicDto, item, {
      excludeExtraneousValues: true,
    });
  }

  /**
   * Kurs like toggle:
   * - Agar foydalanuvchi bu kursni avval like qilgan bo'lsa → unlike (o'chirish)
   * - Agar like qilmagan bo'lsa → like (qo'shish)
   * userId JWT tokendan (controller orqali) keladi
   */
  async toggle(courseId: number, userId: number) {
    const course = await Course.findOneBy({ id: courseId });
    if (!course)
      throw new NotFoundException(`Kurs topilmadi (id: ${courseId})`);

    const existing = await CourseLike.findOne({ where: { courseId, userId } });

    if (existing) {
      await CourseLike.remove(existing);
      // likesCount ni kamaytirish (0 dan past ketmasin)
      course.likesCount = Math.max(0, (course.likesCount || 0) - 1);
      await course.save();
      return {
        liked: false,
        likesCount: course.likesCount,
        message: 'Kurs likedan olib tashlandi',
      };
    }

    const like = CourseLike.create({ courseId, userId } as CourseLike);
    await like.save();

    // likesCount ni oshirish
    course.likesCount = (course.likesCount || 0) + 1;
    await course.save();

    return {
      liked: true,
      likesCount: course.likesCount,
      message: 'Kurs like qilindi',
      data: plainToInstance(CourseLikeDetailPublicDto, like, {
        excludeExtraneousValues: true,
      }),
    };
  }

  /** Foydalanuvchining like qilgan kurslarini qaytaradi */
  async getMyLikes(userId: number) {
    const items = await CourseLike.find({ where: { userId } });
    return plainToInstance(CourseLikeListPublicDto, items, {
      excludeExtraneousValues: true,
    });
  }
}
