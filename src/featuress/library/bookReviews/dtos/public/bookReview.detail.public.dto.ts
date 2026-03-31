import { Expose } from 'class-transformer';
import { ApiProperty } from '@nestjs/swagger';

export class BookReviewDetailPublicDto {
  @Expose()
  @ApiProperty()
  id?: any;
  @Expose()
  @ApiProperty()
  userId?: any;
  @Expose()
  @ApiProperty()
  bookId?: any;
  @Expose()
  @ApiProperty()
  rating?: any;
  @Expose()
  @ApiProperty()
  comment?: any;
  @Expose()
  @ApiProperty()
  createdAt?: any;
  @Expose()
  @ApiProperty()
  updatedAt?: any;
}
