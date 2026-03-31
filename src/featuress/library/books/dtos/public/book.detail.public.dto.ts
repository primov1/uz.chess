import { Expose } from 'class-transformer';
import { ApiProperty } from '@nestjs/swagger';

export class BookDetailPublicDto {
  @Expose()
  @ApiProperty()
  id!: number;

  @Expose()
  @ApiProperty()
  title!: string;

  @Expose()
  @ApiProperty()
  description!: string;

  @Expose()
  @ApiProperty()
  image?: string;

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
  pubDate!: string;
}
