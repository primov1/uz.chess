import { ApiPropertyOptional } from '@nestjs/swagger';
import {
  IsEnum,
  IsNumber,
  IsOptional,
  IsString,
  MaxLength,
  Min,
} from 'class-validator';
export class ReportCategoryUpdateAdminDto {
  @IsString()
  @MaxLength(64)
  @IsOptional()
  @ApiPropertyOptional()
  title?: string;
  @IsNumber()
  @IsOptional()
  @ApiPropertyOptional()
  order?: number;
}
