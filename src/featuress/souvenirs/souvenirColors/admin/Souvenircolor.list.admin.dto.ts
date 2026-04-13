import { Expose } from 'class-transformer';
import { ApiProperty } from '@nestjs/swagger';

export class SouvenirColorListAdminDto {
  @Expose()
  @ApiProperty()
  id!: number;
  @Expose()
  @ApiProperty()
  souvenirId!: number;
  @Expose()
  @ApiProperty()
  colorId!: number;
}
