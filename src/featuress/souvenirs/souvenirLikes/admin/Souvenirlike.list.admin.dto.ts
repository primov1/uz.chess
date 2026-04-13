import { Expose } from 'class-transformer';
import { ApiProperty } from '@nestjs/swagger';

export class SouvenirLikeListAdminDto {
  @Expose()
  @ApiProperty()
  id!: number;
  @Expose()
  @ApiProperty()
  userId!: number;
  @Expose()
  @ApiProperty()
  souvenirId!: number;
  @Expose()
  @ApiProperty()
  date!: Date;
}
