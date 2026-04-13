import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  Unique,
} from 'typeorm';
import { BaseModel } from '../../../../core/base-model';
import { Course } from '../../courses/entities/course.entity';
import { User } from '../../../users/entities/user.entity';

// Bir user bir kursga faqat bir marta like bosa oladi
@Unique(['userId', 'courseId'])
@Entity('courseLikes')
export class CourseLike extends BaseModel {
  @Column()
  userId!: number;

  @Column()
  courseId!: number;

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
