import { IsString, MaxLength } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class AuthForgotPasswordPublicDto {
  @IsString()
  @MaxLength(64)
  @ApiProperty({ example: 'ali@example.com' })
  login!: string;
}
