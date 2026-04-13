import { Column, Entity, JoinColumn, ManyToOne, Unique } from 'typeorm';
import { BaseModel } from '../../../../core/base-model';
import { CourseLesson } from '../../courseLessons/entities/courseLesson.entity';
import { User } from '../../../users/entities/user.entity';

// Bir user bir darsni faqat bir marta track qila oladi
@Unique(['userId', 'courseLessonId'])
@Entity('users_lessons')
export class UserLesson extends BaseModel {
  @Column()
  userId!: number;

  @Column()
  courseLessonId!: number;

  // Videoning qaysi sekundasida to'xtatilgani (davom ettirish uchun)
  @Column({ nullable: true })
  stoppedAt?: number;

  @Column({ default: false })
  isCompleted!: boolean;

  // ─── Relations ───────────────────────────────────────────────────────────────
  @ManyToOne(() => CourseLesson, (lesson) => lesson.userLessons, {
    onDelete: 'CASCADE',
    eager: false,
  })
  @JoinColumn({ name: 'courseLessonId' })
  lesson!: CourseLesson;

  @ManyToOne(() => User, { onDelete: 'CASCADE', eager: false })
  @JoinColumn({ name: 'userId' })
  user!: User;
}
