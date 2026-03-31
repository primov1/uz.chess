import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import {
  IsBoolean,
  IsNumber,
  IsOptional,
  IsString,
  MaxLength,
  Min,
} from 'class-validator';
export class UserLessonCreateAdminDto {
  @IsNumber()
  @ApiProperty()
  userId!: number;
  @IsNumber()
  @ApiProperty()
  courseLessonId!: number;
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
