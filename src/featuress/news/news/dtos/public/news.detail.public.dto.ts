import { ApiProperty } from '@nestjs/swagger';
import { Expose } from 'class-transformer';

export class NewsDetailPublicDto {
  @Expose()
  @ApiProperty()
  id!: number;
  @Expose()
  @ApiProperty()
  title!: string;
  @Expose()
  @ApiProperty()
  image!: string;
  @Expose()
  @ApiProperty()
  content!: string;
  @Expose()
  @ApiProperty()
  date!: string;
}
