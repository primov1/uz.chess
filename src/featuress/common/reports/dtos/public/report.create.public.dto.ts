import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import {
  IsEnum,
  IsNumber,
  IsOptional,
  IsString,
  MaxLength,
} from 'class-validator';
import { ReportType } from '../../entities/report.entity'; // userId JWT tokendan olinadi — foydalanuvchi o'zi yuboradi

// userId JWT tokendan olinadi — foydalanuvchi o'zi yuboradi
export class ReportCreatePublicDto {
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
