import { Expose } from 'class-transformer';
import { ApiProperty } from '@nestjs/swagger';
export class NewsViewListAdminDto {
  @Expose()
  @ApiProperty()
  id!: number;
  @Expose()
  @ApiProperty()
  userId!: number;
  @Expose()
  @ApiProperty()
  newsId!: number;
  @Expose()
  @ApiProperty()
  count!: number;
  @Expose()
  @ApiProperty()
  firstDate!: string;
  @Expose()
  @ApiProperty()
  lastDate!: string;
}
