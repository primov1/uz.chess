import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
} from 'typeorm';
import { BaseModel } from '@/core/base-model';
import { User } from '../../../users/entities/user.entity';
import { ReportCategory } from '../../reportCategories/entities/reportCategory.entity';

export enum ReportType {
  BOOK = 'book',
  COURSE = 'course',
}

@Entity('reports')
export class Report extends BaseModel {
  // Kim report yuborganini saqlash uchun
  @Column()
  userId!: number;

  @Column()
  reportCategoryId!: number;

  // Qaysi jadvalni report qilishini bildiradi (book yoki course review)
  @Column({ type: 'enum', enum: ReportType })
  target!: ReportType;

  @Column()
  targetId!: number;

  @Column({ length: 256, nullable: true })
  description?: string;

  @CreateDateColumn({ type: 'timestamp' })
  date!: Date;

  @ManyToOne(() => User, { onDelete: 'CASCADE', eager: false })
  @JoinColumn({ name: 'userId' })
  user!: User;

  @ManyToOne(() => ReportCategory, { onDelete: 'RESTRICT', eager: false })
  @JoinColumn({ name: 'reportCategoryId' })
  reportCategory!: ReportCategory;
}
