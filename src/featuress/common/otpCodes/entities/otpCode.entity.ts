import { Column, Entity, JoinColumn, ManyToOne } from 'typeorm';
import { BaseModel } from '@/core/base-model';
import { User } from '../../../users/entities/user.entity';

export enum OtpType {
  REGISTER = 'register',
  PASSWORD_RESET = 'passwordReset',
  NUMBER_CHANGE = 'numberChange',
}

@Entity('otpCodes')
export class OtpCode extends BaseModel {
  @Column()
  userId!: number;

  @Column({ length: 6 })
  code!: string;

  // OTP muddati tugash vaqti (5 daqiqa)
  @Column({ type: 'timestamp' })
  expiresAt!: Date;

  @Column({ type: 'enum', enum: OtpType })
  type!: OtpType;

  // ─── Relations ───────────────────────────────────────────────────────────────
  @ManyToOne(() => User, { onDelete: 'CASCADE', eager: false })
  @JoinColumn({ name: 'userId' })
  user!: User;
}
