import { Expose } from 'class-transformer';
import { ApiProperty } from '@nestjs/swagger';

export class CourseSectionListPublicDto {
  @Expose()
  @ApiProperty()
  id?: any;
  @Expose()
  @ApiProperty()
  courseId?: any;
  @Expose()
  @ApiProperty()
  title?: any;
  @Expose()
  @ApiProperty()
  order?: any;
}
