import { Expose } from 'class-transformer';
import { ApiProperty } from '@nestjs/swagger';

export class CountryListPublicDto {
  @Expose()
  @ApiProperty()
  id?: any;
  @Expose()
  @ApiProperty()
  title?: any;
  @Expose()
  @ApiProperty()
  flag?: any;
}
