import { ApiPropertyOptional } from '@nestjs/swagger';
import {
  IsDateString,
  IsEnum,
  IsNumber,
  IsOptional,
  Min,
} from 'class-validator';
import { MatchType, WinnerType } from '../../entities/match.entity';

export class MatchUpdateAdminDto {
  @IsNumber()
  @Min(0)
  @IsOptional()
  @ApiPropertyOptional()
  firstPlayerResult?: number;
  @IsNumber()
  @Min(0)
  @IsOptional()
  @ApiPropertyOptional()
  secondPlayerResult?: number;
  @IsEnum(MatchType)
  @IsOptional()
  @ApiPropertyOptional({ enum: MatchType })
  type?: MatchType;
  @IsNumber()
  @Min(1)
  @IsOptional()
  @ApiPropertyOptional()
  moves?: number;
  @IsDateString()
  @IsOptional()
  @ApiPropertyOptional()
  date?: string;
  @IsEnum(WinnerType)
  @IsOptional()
  @ApiPropertyOptional({ enum: WinnerType })
  winner?: WinnerType;
}
