import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, OneToMany } from 'typeorm';
import { BaseModel } from '../../../../core/base-model';
import { Course } from '../../courses/entities/course.entity';
import { CourseSection } from '../../courseSections/entities/courseSection.entity';
import { UserLesson } from '../../userLessons/entities/userLesson.entity';

@Entity('courseLessons')
export class CourseLesson extends BaseModel {
  @Column()
  courseId!: number;

  @Column()
  courseSectionId!: number;

  @Column({ length: 128 })
  title!: string;

  @Column({ type: 'text', nullable: true })
  content?: string;

  @Column({ length: 128, nullable: true })
  thumbnail?: string;

  @Column({ length: 256 })
  video!: string;

  @Column({ nullable: true })
  order?: number;

  @CreateDateColumn({ type: 'timestamp' })
  date!: Date;

  @Column({ default: false })
  isFree!: boolean;

  // ─── Relations ───────────────────────────────────────────────────────────────
  @ManyToOne(() => Course, { onDelete: 'CASCADE', eager: false })
  @JoinColumn({ name: 'courseId' })
  course!: Course;

  @ManyToOne(() => CourseSection, (section) => section.lessons, { onDelete: 'CASCADE', eager: false })
  @JoinColumn({ name: 'courseSectionId' })
  section!: CourseSection;

  @OneToMany(() => UserLesson, (ul) => ul.lesson, { cascade: false })
  userLessons!: UserLesson[];
}
