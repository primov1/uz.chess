import { Expose } from 'class-transformer';
import { ApiProperty } from '@nestjs/swagger';

export class DifficultyListPublicDto {
  @Expose()
  @ApiProperty()
  id?: any;
  @Expose()
  @ApiProperty()
  title?: any;
  @Expose()
  @ApiProperty()
  icon?: any;
}
