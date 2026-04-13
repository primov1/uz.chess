import { Expose } from 'class-transformer';
import { ApiProperty } from '@nestjs/swagger';

export class PurchasedCourseListPublicDto {
  @Expose()
  @ApiProperty()
  id?: any;
  @Expose()
  @ApiProperty()
  userId?: any;
  @Expose()
  @ApiProperty()
  courseId?: any;
  @Expose()
  @ApiProperty()
  isCompleted?: any;
  @Expose()
  @ApiProperty()
  createdAt?: any;
}
