import { Expose } from 'class-transformer';
import { ApiProperty } from '@nestjs/swagger';
import { MatchType, WinnerType } from '../../entities/match.entity';

export class MatchDetailAdminDto {
  @Expose()
  @ApiProperty()
  id!: number;
  @Expose()
  @ApiProperty()
  firstPlayerId!: number;
  @Expose()
  @ApiProperty()
  firstPlayerResult!: number;
  @Expose()
  @ApiProperty()
  secondPlayerId!: number;
  @Expose()
  @ApiProperty()
  secondPlayerResult!: number;
  @Expose()
  @ApiProperty({ enum: MatchType })
  type!: MatchType;
  @Expose()
  @ApiProperty()
  moves!: number;
  @Expose()
  @ApiProperty()
  date!: string;
  @Expose()
  @ApiProperty({ enum: WinnerType })
  winner!: WinnerType;
  @Expose()
  @ApiProperty()
  createdAt!: string;
  @Expose()
  @ApiProperty()
  updatedAt?: string;
}
