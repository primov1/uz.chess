import { Expose } from 'class-transformer';
import { ApiProperty } from '@nestjs/swagger';

export class UserDetailPublicDto {
  @Expose()
  @ApiProperty()
  id!: number;
  @Expose()
  @ApiProperty()
  fullName!: string;
  @Expose()
  @ApiProperty()
  profileImage?: string;
  @Expose()
  @ApiProperty()
  login!: string;
  @Expose()
  @ApiProperty()
  birthDate?: string;
}
