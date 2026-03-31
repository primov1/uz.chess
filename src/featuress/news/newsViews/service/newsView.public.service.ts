import { Injectable } from '@nestjs/common';
import { NewsView } from '../entities/newsView.entity';
import { NewsViewCreatePublicDto } from '../dtos/public/newsView.create.public.dto';

@Injectable()
export class NewsViewPublicService {
  async create(userId: number, payload: NewsViewCreatePublicDto) {
    const existing = await NewsView.findOneBy({
      userId,
      newsId: payload.newsId,
    });

    if (existing) {
      existing.count += 1;
      // lastDate — @UpdateDateColumn, TypeORM o'zi yangilaydi
      return NewsView.save(existing);
    }

    const item = NewsView.create({
      userId,
      newsId: payload.newsId,
      // firstDate va lastDate — @CreateDateColumn/@UpdateDateColumn, TypeORM o'zi o'rnatadi
    } as NewsView);
    return NewsView.save(item);
  }
}
