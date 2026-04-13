import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  Unique,
} from 'typeorm';
import { BaseModel } from '../../../../core/base-model';
import { Book } from '../../books/entities/book.entity';
import { User } from '../../../users/entities/user.entity';

// Bir user bir kitobga faqat bir marta like bosa oladi
@Unique(['userId', 'bookId'])
@Entity('bookLikes')
export class BookLike extends BaseModel {
  @Column()
  userId!: number;

  @Column()
  bookId!: number;

  @CreateDateColumn({ type: 'timestamp' })
  date!: Date;

  // ─── Relations ───────────────────────────────────────────────────────────────
  @ManyToOne(() => Book, { onDelete: 'CASCADE', eager: false })
  @JoinColumn({ name: 'bookId' })
  book!: Book;

  @ManyToOne(() => User, { onDelete: 'CASCADE', eager: false })
  @JoinColumn({ name: 'userId' })
  user!: User;
}
