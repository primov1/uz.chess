import { Expose } from 'class-transformer';
import { ApiProperty } from '@nestjs/swagger';

export class ColorListAdminDto {
  @Expose()
  @ApiProperty()
  id!: number;
  @Expose()
  @ApiProperty()
  title!: string;
  @Expose()
  @ApiProperty()
  color!: string;
}
