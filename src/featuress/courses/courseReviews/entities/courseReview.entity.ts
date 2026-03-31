import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, Unique } from 'typeorm';
import { BaseModel } from '../../../../core/base-model';
import { Course } from '../../courses/entities/course.entity';
import { User } from '../../../users/entities/user.entity';

// Bir user bir kursga faqat bir marta review yoza oladi
@Unique(['userId', 'courseId'])
@Entity('courseReviews')
export class CourseReview extends BaseModel {
  @Column()
  userId!: number;

  @Column()
  courseId!: number;

  @Column()
  rating!: number; // 1 >= x <= 5

  @Column({ length: 512, nullable: true })
  comment?: string;

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
