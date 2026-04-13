import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  Unique,
  UpdateDateColumn,
} from 'typeorm';
import { BaseModel } from '../../../../core/base-model';
import { User } from '../../../users/entities/user.entity';
import { News } from '../../news/entities/news.entity';

// Bir user bir yangilikni faqat bir marta track qila oladi (count oshiriladi)
@Unique(['userId', 'newsId'])
@Entity('newsViews')
export class NewsView extends BaseModel {
  @Column()
  userId!: number;

  @Column()
  newsId!: number;

  @CreateDateColumn({ type: 'timestamp' })
  firstDate!: Date;

  // Har 1 soatda qayta ko'rish xisoblanadi — service darajasida tekshiriladi
  @UpdateDateColumn({ type: 'timestamp' })
  lastDate!: Date;

  @Column({ default: 1 })
  count!: number;

  // ─── Relations ───────────────────────────────────────────────────────────────
  @ManyToOne(() => User, { onDelete: 'CASCADE', eager: false })
  @JoinColumn({ name: 'userId' })
  user!: User;

  @ManyToOne(() => News, { onDelete: 'CASCADE', eager: false })
  @JoinColumn({ name: 'newsId' })
  news!: News;
}
