import { Expose } from 'class-transformer';
import { ApiProperty } from '@nestjs/swagger';
export class ReportListPublicDto {
  @Expose()
  @ApiProperty()
  id?: any;
  @Expose()
  @ApiProperty()
  userId?: any;
  @Expose()
  @ApiProperty()
  reportCategoryId?: any;
  @Expose()
  @ApiProperty()
  target?: any;
  @Expose()
  @ApiProperty()
  targetId?: any;
  @Expose()
  @ApiProperty()
  description?: any;
  @Expose()
  @ApiProperty()
  date?: any;
  @Expose()
  @ApiProperty()
  createdAt?: any;
}
