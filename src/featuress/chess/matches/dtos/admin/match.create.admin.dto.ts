import { ApiProperty } from '@nestjs/swagger';
import { IsDateString, IsEnum, IsNumber, Min } from 'class-validator';
import { MatchType, WinnerType } from '../../entities/match.entity';

export class MatchCreateAdminDto {
  @IsNumber()
  @ApiProperty()
  firstPlayerId!: number;
  @IsNumber()
  @Min(0)
  @ApiProperty()
  firstPlayerResult!: number;
  @IsNumber()
  @ApiProperty()
  secondPlayerId!: number;
  @IsNumber()
  @Min(0)
  @ApiProperty()
  secondPlayerResult!: number;
  @IsEnum(MatchType)
  @ApiProperty({ enum: MatchType })
  type!: MatchType;
  @IsNumber()
  @Min(1)
  @ApiProperty()
  moves!: number;
  @IsDateString()
  @ApiProperty()
  date!: string;
  @IsEnum(WinnerType)
  @ApiProperty({ enum: WinnerType })
  winner!: WinnerType;
}
