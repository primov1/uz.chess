import { Column, Entity, OneToMany } from 'typeorm';
import { BaseModel } from '../../../../core/base-model';
import { CourseLike } from '../../courseLikes/entities/courseLike.entity';
import { CourseReview } from '../../courseReviews/entities/courseReview.entity';
import { CourseSection } from '../../courseSections/entities/courseSection.entity';
import { PurchasedCourse } from '../../purchasedCourses/entities/purchasedCourse.entity';

@Entity('courses')
export class Course extends BaseModel {
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

  @Column({ length: 128 })
  image!: string;

  @Column({ type: 'decimal', precision: 12, scale: 2 })
  price!: number;

  @Column({ type: 'decimal', precision: 12, scale: 2, nullable: true })
  newPrice?: number;

  // Kurs chala holatida userlarga ko'rinib qolmasligi uchun
  @Column({ default: false })
  isPublished!: boolean;

  @Column({ default: 0 })
  reviewsCount!: number;

  @Column({ type: 'decimal', precision: 2, scale: 1, nullable: true })
  rating?: number;

  @Column({ default: 0 })
  sectionsCount!: number;

  @Column({ default: 0 })
  lessonsCount!: number;

  @Column({ default: 0 })
  likesCount!: number;

  // ─── Relations ───────────────────────────────────────────────────────────────
  @OneToMany(() => CourseLike, (like) => like.course, { cascade: false })
  likes!: CourseLike[];

  @OneToMany(() => CourseReview, (review) => review.course, { cascade: false })
  reviews!: CourseReview[];

  @OneToMany(() => CourseSection, (section) => section.course, { cascade: false })
  sections!: CourseSection[];

  @OneToMany(() => PurchasedCourse, (pc) => pc.course, { cascade: false })
  purchasedCourses!: PurchasedCourse[];
}
