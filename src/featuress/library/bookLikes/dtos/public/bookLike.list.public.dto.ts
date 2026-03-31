import { Expose } from 'class-transformer';
import { ApiProperty } from '@nestjs/swagger';

export class BookLikeListPublicDto {
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
  createdAt?: any;
}
