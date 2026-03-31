import { Column, Entity, OneToMany } from 'typeorm';
import { BaseModel } from '../../../../core/base-model';
import { BookLike } from '../../bookLikes/entities/bookLike.entity';
import { BookReview } from '../../bookReviews/entities/bookReview.entity';

@Entity('books')
export class Book extends BaseModel {
  @Column()
  authorId!: number;

  @Column()
  categoryId!: number;

  @Column()
  languageId!: number;

  @Column()
  difficultyId!: number;

  @Column({ length: 128 })
  title!: string;

  @Column({ type: 'text' })
  description!: string;

  @Column({ length: 128, nullable: true })
  image?: string;

  @Column({ type: 'decimal', precision: 12, scale: 2 })
  price!: number;

  @Column({ type: 'decimal', precision: 12, scale: 2, nullable: true })
  newPrice?: number;

  @Column({ type: 'decimal', precision: 2, scale: 1, nullable: true })
  rating?: number;

  @Column({ default: 0 })
  reviewsCount!: number;

  @Column({ default: 0 })
  likesCount!: number;

  @Column()
  pages!: number;

  @Column({ type: 'date' })
  pubDate!: string;

  // ─── Relations ───────────────────────────────────────────────────────────────
  @OneToMany(() => BookLike, (like) => like.book, { cascade: false })
  likes!: BookLike[];

  @OneToMany(() => BookReview, (review) => review.book, { cascade: false })
  reviews!: BookReview[];
}
