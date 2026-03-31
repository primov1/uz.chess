import { Expose } from 'class-transformer';
import { ApiProperty } from '@nestjs/swagger';

export class DifficultyListAdminDto {
  @Expose()
  @ApiProperty()
  id?: any;
  @Expose()
  @ApiProperty()
  title?: any;
  @Expose()
  @ApiProperty()
  icon?: any;
  @Expose()
  @ApiProperty()
  createdAt?: any;
  @Expose()
  @ApiProperty()
  updatedAt?: any;
}
