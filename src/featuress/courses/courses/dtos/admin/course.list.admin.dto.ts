import { Expose } from 'class-transformer';
import { ApiProperty } from '@nestjs/swagger';
export class CourseListAdminDto {
  @Expose()
  @ApiProperty()
  id?: any;
  @Expose()
  @ApiProperty()
  title?: any;
  @Expose()
  @ApiProperty()
  price?: any;
  @Expose()
  @ApiProperty()
  newPrice?: any;
  @Expose()
  @ApiProperty()
  rating?: any;
  @Expose()
  @ApiProperty()
  reviewsCount?: any;
  @Expose()
  @ApiProperty()
  image?: any;
}
