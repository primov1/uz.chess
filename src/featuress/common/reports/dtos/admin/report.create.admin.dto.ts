import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import {
  IsEnum,
  IsNumber,
  IsOptional,
  IsString,
  MaxLength,
} from 'class-validator';
import { ReportType } from '../../entities/report.entity';

export class ReportCreateAdminDto {
  @IsNumber()
  @ApiProperty()
  userId!: number;

  @IsNumber()
  @ApiProperty()
  reportCategoryId!: number;

  @IsEnum(ReportType)
  @ApiProperty({ enum: ReportType })
  target!: ReportType;

  @IsNumber()
  @ApiProperty()
  targetId!: number;

  @IsString()
  @MaxLength(256)
  @IsOptional()
  @ApiPropertyOptional()
  description?: string;
}
