import { Expose } from 'class-transformer';
import { ApiProperty } from '@nestjs/swagger';

export class BookCategoryDetailPublicDto {
  @Expose()
  @ApiProperty()
  id?: any;
  @Expose()
  @ApiProperty()
  title?: any;
}
