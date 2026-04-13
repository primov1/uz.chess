import { Expose } from 'class-transformer';
import { ApiProperty } from '@nestjs/swagger';

export class SouvenirListPublicDto {
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
  rating?: number;
  @Expose()
  @ApiProperty()
  reviewsCount!: number;
  @Expose()
  @ApiProperty()
  likesCount!: number;
}
