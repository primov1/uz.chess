import { Column, Entity, JoinColumn, ManyToOne } from 'typeorm';
import { BaseModel } from '../../../../core/base-model';
import { Country } from '../../countries/entities/country.entity';

@Entity('players')
export class Player extends BaseModel {
  @Column()
  countryId!: number;

  @Column({ length: 64 })
  fullName!: string;

  @Column({ length: 128, nullable: true })
  image?: string;

  @Column({ nullable: true })
  classic?: number;

  @Column({ nullable: true })
  rapid?: number;

  @Column({ nullable: true })
  blitz?: number;

  // ─── Relations ───────────────────────────────────────────────────────────────
  @ManyToOne(() => Country, { onDelete: 'RESTRICT', eager: false })
  @JoinColumn({ name: 'countryId' })
  country!: Country;
}
