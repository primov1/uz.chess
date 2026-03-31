import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import {
  IsEnum,
  IsNumber,
  IsOptional,
  IsString,
  MaxLength,
  Min,
} from 'class-validator';
export class ReportCategoryCreateAdminDto {
  @IsString()
  @MaxLength(64)
  @ApiProperty()
  title!: string;
  @IsNumber()
  @IsOptional()
  @ApiPropertyOptional()
  order?: number;
}
