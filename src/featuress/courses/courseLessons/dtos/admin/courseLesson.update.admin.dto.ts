import { ApiPropertyOptional } from '@nestjs/swagger';
import {
  IsBoolean,
  IsNumber,
  IsOptional,
  IsString,
  MaxLength,
} from 'class-validator';

export class CourseLessonUpdateAdminDto {
  @IsNumber()
  @IsOptional()
  @ApiPropertyOptional()
  courseId?: number;
  @IsNumber()
  @IsOptional()
  @ApiPropertyOptional()
  courseSectionId?: number;
  @IsString()
  @MaxLength(128)
  @IsOptional()
  @ApiPropertyOptional()
  title?: string;
  @IsString()
  @IsOptional()
  @ApiPropertyOptional()
  content?: string;
  @IsString()
  @MaxLength(128)
  @IsOptional()
  @ApiPropertyOptional()
  thumbnail?: string;
  @IsString()
  @MaxLength(256)
  @IsOptional()
  @ApiPropertyOptional()
  video?: string;
  @IsNumber()
  @IsOptional()
  @ApiPropertyOptional()
  order?: number;
  @IsBoolean()
  @IsOptional()
  @ApiPropertyOptional()
  isFree?: boolean;
}
