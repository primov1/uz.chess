import { Expose } from 'class-transformer';
import { ApiProperty } from '@nestjs/swagger';

export class CourseReviewListAdminDto {
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
  rating?: any;
  @Expose()
  @ApiProperty()
  comment?: any;
  @Expose()
  @ApiProperty()
  createdAt?: any;
}
