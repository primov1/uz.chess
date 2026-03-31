import { Column, Entity } from 'typeorm';
import { BaseModel } from '../../../../core/base-model';

// Singleton jadval — faqat bitta yozuv bo'lishi kerak (id=1)
@Entity('terms')
export class Terms extends BaseModel {
  @Column({ type: 'text' })
  content!: string;
}
