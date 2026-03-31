import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import {
  IsBoolean,
  IsNumber,
  IsOptional,
  IsString,
  MaxLength,
  Min,
} from 'class-validator';
export class CourseLikeCreateAdminDto {
  @IsNumber()
  @ApiProperty()
  userId!: number;
  @IsNumber()
  @ApiProperty()
  courseId!: number;
}
