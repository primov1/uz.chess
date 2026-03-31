import { Expose } from 'class-transformer';
import { ApiProperty } from '@nestjs/swagger';

export class BookListPublicDto {
  @Expose()
  @ApiProperty()
  id!: number;

  @Expose()
  @ApiProperty()
  title!: string;

  @Expose()
  @ApiProperty()
  price!: number;

  @Expose()
  @ApiProperty()
  newPrice?: number;

  @Expose()
  @ApiProperty()
  rating?: number;

  @Expose()
  @ApiProperty()
  reviewsCount!: number;

  @Expose()
  @ApiProperty()
  pages!: number;

  @Expose()
  @ApiProperty()
  image?: string;
}
