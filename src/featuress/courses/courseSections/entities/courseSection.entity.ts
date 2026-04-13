import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import { BaseModel } from '../../../../core/base-model';
import { Course } from '../../courses/entities/course.entity';
import { CourseLesson } from '../../courseLessons/entities/courseLesson.entity';

@Entity('courseSections')
export class CourseSection extends BaseModel {
  @Column()
  courseId!: number;

  @Column({ length: 256 })
  title!: string;

  @Column({ nullable: true })
  order?: number;

  @CreateDateColumn({ type: 'timestamp' })
  date!: Date;

  // ─── Relations ───────────────────────────────────────────────────────────────
  @ManyToOne(() => Course, { onDelete: 'CASCADE', eager: false })
  @JoinColumn({ name: 'courseId' })
  course!: Course;

  @OneToMany(() => CourseLesson, (lesson) => lesson.section, { cascade: false })
  lessons!: CourseLesson[];
}
