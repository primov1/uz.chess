import { Expose } from 'class-transformer';
import { ApiProperty } from '@nestjs/swagger';

export class AuthTokenPublicDto {
  @Expose()
  @ApiProperty()
  accessToken!: string;

  @Expose()
  @ApiProperty()
  refreshToken!: string;
}
