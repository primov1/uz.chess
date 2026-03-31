import { Expose } from 'class-transformer';
import { ApiProperty } from '@nestjs/swagger';
export class CourseDetailAdminDto {
  @Expose()
  @ApiProperty()
  id?: any;
  @Expose()
  @ApiProperty()
  authorId?: any;
  @Expose()
  @ApiProperty()
  categoryId?: any;
  @Expose()
  @ApiProperty()
  languageId?: any;
  @Expose()
  @ApiProperty()
  difficultyId?: any;
  @Expose()
  @ApiProperty()
  title?: any;
  @Expose()
  @ApiProperty()
  image?: any;
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
  sectionsCount?: any;
  @Expose()
  @ApiProperty()
  lessonsCount?: any;
  @Expose()
  @ApiProperty()
  createdAt?: any;
  @Expose()
  @ApiProperty()
  updatedAt?: any;
}
