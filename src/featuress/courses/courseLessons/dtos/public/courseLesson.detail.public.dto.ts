import { Expose } from 'class-transformer';
import { ApiProperty } from '@nestjs/swagger';
export class CourseLessonDetailPublicDto {
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
  content?: any;
  @Expose()
  @ApiProperty()
  thumbnail?: any;
  @Expose()
  @ApiProperty()
  video?: any;
  @Expose()
  @ApiProperty()
  order?: any;
  @Expose()
  @ApiProperty()
  isFree?: any;
  @Expose()
  @ApiProperty()
  createdAt?: any;
  @Expose()
  @ApiProperty()
  updatedAt?: any;
}
