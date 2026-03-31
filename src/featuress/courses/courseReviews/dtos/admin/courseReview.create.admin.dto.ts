import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsNumber, IsOptional, IsString, Max, MaxLength, Min } from 'class-validator';

export class CourseReviewCreateAdminDto {
  @IsNumber()
  @ApiProperty()
  userId!: number;

  @IsNumber()
  @ApiProperty()
  courseId!: number;

  @IsNumber()
  @Min(1)
  @Max(5)
  @ApiProperty({ minimum: 1, maximum: 5 })
  rating!: number;

  @IsString()
  @MaxLength(512)
  @IsOptional()
  @ApiPropertyOptional()
  comment?: string;
}
