import { ApiPropertyOptional } from '@nestjs/swagger';
import {
  IsBoolean,
  IsNumber,
  IsOptional,
  IsString,
  MaxLength,
  Min,
} from 'class-validator';
export class UserLessonUpdateAdminDto {
  @IsNumber()
  @IsOptional()
  @ApiPropertyOptional()
  userId?: number;
  @IsNumber()
  @IsOptional()
  @ApiPropertyOptional()
  courseLessonId?: number;
  @IsNumber()
  @Min(0)
  @IsOptional()
  @ApiPropertyOptional()
  stoppedAt?: number;
  @IsBoolean()
  @IsOptional()
  @ApiPropertyOptional()
  isCompleted?: boolean;
}
