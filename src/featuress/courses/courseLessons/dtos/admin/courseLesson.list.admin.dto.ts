import { Expose } from 'class-transformer';
import { ApiProperty } from '@nestjs/swagger';
import { Allow } from 'class-validator';

export class CourseLessonListAdminDto {
  @Expose()
  @ApiProperty()
  id?: any;
  @Expose()
  @ApiProperty()
  courseId?: any;
  @Expose()
  @ApiProperty()
  courseSectionId?: any;
  @Expose()
  @ApiProperty()
  title?: any;
  @Expose()
  @ApiProperty()
  @Allow()
  video?: any;
  @Expose()
  @ApiProperty()
  order?: any;
  @Expose()
  @ApiProperty()
  isFree?: any;
}
