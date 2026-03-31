import { ApiPropertyOptional } from '@nestjs/swagger';
import { IsNumber, IsOptional, IsString, MaxLength } from 'class-validator';

export class CourseSectionUpdateAdminDto {
  @IsNumber()
  @IsOptional()
  @ApiPropertyOptional()
  courseId?: number;

  @IsString()
  @MaxLength(256)
  @IsOptional()
  @ApiPropertyOptional()
  title?: string;

  @IsNumber()
  @IsOptional()
  @ApiPropertyOptional()
  order?: number;
}
