import { Expose } from 'class-transformer';
import { ApiProperty } from '@nestjs/swagger';
export class UserLessonListPublicDto {
  @Expose()
  @ApiProperty()
  id?: any;
  @Expose()
  @ApiProperty()
  userId?: any;
  @Expose()
  @ApiProperty()
  courseLessonId?: any;
  @Expose()
  @ApiProperty()
  stoppedAt?: any;
  @Expose()
  @ApiProperty()
  isCompleted?: any;
}
