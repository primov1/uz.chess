import { ApiProperty } from '@nestjs/swagger';
import { IsNumber } from 'class-validator';

export class CourseLikeCreateAdminDto {
  @IsNumber()
  @ApiProperty()
  userId!: number;
  @IsNumber()
  @ApiProperty()
  courseId!: number;
}
