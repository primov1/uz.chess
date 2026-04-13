import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsBoolean, IsNumber, IsOptional } from 'class-validator';

export class PurchasedCourseCreateAdminDto {
  @IsNumber()
  @ApiProperty()
  userId!: number;
  @IsNumber()
  @ApiProperty()
  courseId!: number;
  @IsBoolean()
  @IsOptional()
  @ApiPropertyOptional()
  isCompleted?: boolean;
}
