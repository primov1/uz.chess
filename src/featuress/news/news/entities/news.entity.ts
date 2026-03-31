import { Column, CreateDateColumn, Entity } from 'typeorm';
import { BaseModel } from '../../../../core/base-model';

@Entity('news')
export class News extends BaseModel {
  @Column({ length: 256 })
  title!: string;

  @Column({ length: 128 })
  image!: string;

  @Column({ type: 'text' })
  content!: string;

  @CreateDateColumn({ type: 'timestamp' })
  date!: Date;
}
