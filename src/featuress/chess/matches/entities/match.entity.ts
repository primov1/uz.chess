import { Column, Entity, JoinColumn, ManyToOne } from 'typeorm';
import { BaseModel } from '../../../../core/base-model';
import { Player } from '../../players/entities/player.entity';

export enum MatchType { CLASSIC = 'classic', RAPID = 'rapid', BLITZ = 'blitz' }
export enum WinnerType { FIRST = 'first', SECOND = 'second', DRAW = 'draw' }

@Entity('matches')
export class Match extends BaseModel {
  @Column()
  firstPlayerId!: number;

  @Column()
  firstPlayerResult!: number;

  @Column()
  secondPlayerId!: number;

  @Column()
  secondPlayerResult!: number;

  @Column({ type: 'enum', enum: MatchType })
  type!: MatchType;

  @Column()
  moves!: number;

  @Column({ type: 'date' })
  date!: string;

  @Column({ type: 'enum', enum: WinnerType })
  winner!: WinnerType;

  // ─── Relations ───────────────────────────────────────────────────────────────
  @ManyToOne(() => Player, { onDelete: 'RESTRICT', eager: false })
  @JoinColumn({ name: 'firstPlayerId' })
  firstPlayer!: Player;

  @ManyToOne(() => Player, { onDelete: 'RESTRICT', eager: false })
  @JoinColumn({ name: 'secondPlayerId' })
  secondPlayer!: Player;
}
