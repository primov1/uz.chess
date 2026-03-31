import { IsString, MaxLength, Length } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class AuthResetPasswordPublicDto {
  @IsString()
  @MaxLength(64)
  @ApiProperty({ example: 'ali@example.com' })
  login!: string;

  @IsString()
  @Length(6, 6)
  @ApiProperty({ example: '123456' })
  code!: string;

  @IsString()
  @MaxLength(128)
  @ApiProperty({ example: 'newPassword123' })
  newPassword!: string;
}
