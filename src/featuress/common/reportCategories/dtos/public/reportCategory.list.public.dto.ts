import { Expose } from 'class-transformer';
import { ApiProperty } from '@nestjs/swagger';

export class ReportCategoryListPublicDto {
  @Expose()
  @ApiProperty()
  id?: any;
  @Expose()
  @ApiProperty()
  title?: any;
  @Expose()
  @ApiProperty()
  order?: any;
}
