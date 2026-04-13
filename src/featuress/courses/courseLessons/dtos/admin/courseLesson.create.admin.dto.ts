import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import {
  IsBoolean,
  IsNumber,
  IsOptional,
  IsString,
  MaxLength,
} from 'class-validator';

export class CourseLessonCreateAdminDto {
  @IsNumber()
  @ApiProperty()
  courseId!: number;

  @IsNumber()
  @ApiProperty()
  courseSectionId!: number;

  @IsString()
  @MaxLength(128)
  @ApiProperty()
  title!: string;

  @IsString()
  @IsOptional()
  @ApiPropertyOptional()
  content?: string;

  @IsString()
  @MaxLength(128)
  @IsOptional()
  @ApiPropertyOptional({
    description: 'Thumbnail path — set automatically if file uploaded',
  })
  thumbnail?: string;

  @IsString()
  @MaxLength(256)
  @IsOptional()
  @ApiPropertyOptional({
    description: 'Video path — set automatically if file uploaded',
  })
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
