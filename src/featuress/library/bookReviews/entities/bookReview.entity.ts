import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, Unique } from 'typeorm';
import { BaseModel } from '../../../../core/base-model';
import { Book } from '../../books/entities/book.entity';
import { User } from '../../../users/entities/user.entity';

// Bir user bir kitobga faqat bir marta review yoza oladi
@Unique(['userId', 'bookId'])
@Entity('bookReviews')
export class BookReview extends BaseModel {
  @Column()
  userId!: number;

  @Column()
  bookId!: number;

  @Column()
  rating!: number; // 1 >= x <= 5

  @Column({ length: 512, nullable: true })
  comment?: string;

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
