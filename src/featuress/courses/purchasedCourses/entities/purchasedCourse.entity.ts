import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, Unique } from 'typeorm';
import { BaseModel } from '../../../../core/base-model';
import { Course } from '../../courses/entities/course.entity';
import { User } from '../../../users/entities/user.entity';

// Bir user bir kursni faqat bir marta sotib ola oladi
@Unique(['userId', 'courseId'])
@Entity('purchasedCourses')
export class PurchasedCourse extends BaseModel {
  @Column()
  userId!: number;

  @Column()
  courseId!: number;

  // Har safar courseLessons completed bo'lganida tekshirib qo'yiladi
  @Column({ default: false })
  isCompleted!: boolean;

  @CreateDateColumn({ type: 'timestamp' })
  date!: Date;

  // ─── Relations ───────────────────────────────────────────────────────────────
  @ManyToOne(() => Course, { onDelete: 'CASCADE', eager: false })
  @JoinColumn({ name: 'courseId' })
  course!: Course;

  @ManyToOne(() => User, { onDelete: 'CASCADE', eager: false })
  @JoinColumn({ name: 'userId' })
  user!: User;
}
