import { IsString, MaxLength } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class AuthLoginPublicDto {
  @IsString()
  @MaxLength(64)
  @ApiProperty({ example: 'ali@example.com' })
  login!: string;

  @IsString()
  @MaxLength(128)
  @ApiProperty({ example: 'password123' })
  password!: string;
}
