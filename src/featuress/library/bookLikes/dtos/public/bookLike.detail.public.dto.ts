import { Expose } from 'class-transformer';
import { ApiProperty } from '@nestjs/swagger';

export class BookLikeDetailPublicDto {
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
  @Expose()
  @ApiProperty()
  updatedAt?: any;
}
