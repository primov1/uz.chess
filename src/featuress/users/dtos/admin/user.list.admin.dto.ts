import { Expose } from 'class-transformer';
import { ApiProperty } from '@nestjs/swagger';

export class UserListAdminDto {
  @Expose()
  @ApiProperty()
  id!: number;
  @Expose()
  @ApiProperty()
  role!: string;
  @Expose()
  @ApiProperty()
  fullName!: string;
  @Expose()
  @ApiProperty()
  login!: string;
  @Expose()
  @ApiProperty()
  loginType!: string;
  @Expose()
  @ApiProperty()
  isVerified!: boolean;
  @Expose()
  @ApiProperty()
  isActive!: boolean;
  @Expose()
  @ApiProperty()
  createdAt!: string;
}
