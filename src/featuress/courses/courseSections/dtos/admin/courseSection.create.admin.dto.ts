import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsNumber, IsOptional, IsString, MaxLength } from 'class-validator';

export class CourseSectionCreateAdminDto {
  @IsNumber()
  @ApiProperty()
  courseId!: number;

  @IsString()
  @MaxLength(256)
  @ApiProperty()
  title!: string;

  @IsNumber()
  @IsOptional()
  @ApiPropertyOptional()
  order?: number;
}
