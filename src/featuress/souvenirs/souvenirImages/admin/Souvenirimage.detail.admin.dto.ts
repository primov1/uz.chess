import { Expose } from 'class-transformer';
import { ApiProperty } from '@nestjs/swagger';

export class SouvenirImageDetailAdminDto {
  @Expose()
  @ApiProperty()
  id!: number;
  @Expose()
  @ApiProperty()
  souvenirId!: number;
  @Expose()
  @ApiProperty()
  image!: string;
  @Expose()
  @ApiProperty()
  createdAt!: Date;
  @Expose()
  @ApiProperty()
  updatedAt?: Date;
}
