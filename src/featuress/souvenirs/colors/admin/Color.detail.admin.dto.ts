import { Expose } from 'class-transformer';
import { ApiProperty } from '@nestjs/swagger';

export class ColorDetailAdminDto {
  @Expose()
  @ApiProperty()
  id!: number;
  @Expose()
  @ApiProperty()
  title!: string;
  @Expose()
  @ApiProperty()
  color!: string;
  @Expose()
  @ApiProperty()
  createdAt!: Date;
  @Expose()
  @ApiProperty()
  updatedAt?: Date;
}
