import { ApiPropertyOptional } from '@nestjs/swagger';
import {
  IsBoolean,
  IsNumber,
  IsOptional,
  IsString,
  MaxLength,
  Min,
} from 'class-validator';
export class PurchasedCourseUpdateAdminDto {
  @IsNumber()
  @IsOptional()
  @ApiPropertyOptional()
  userId?: number;
  @IsNumber()
  @IsOptional()
  @ApiPropertyOptional()
  courseId?: number;
  @IsBoolean()
  @IsOptional()
  @ApiPropertyOptional()
  isCompleted?: boolean;
}
