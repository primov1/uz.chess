import {
  IsDateString,
  IsEnum,
  IsOptional,
  IsString,
  MaxLength,
} from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { LoginType } from '../../../users/entities/user.entity';

export class AuthRegisterPublicDto {
  @IsString()
  @MaxLength(64)
  @ApiProperty({ example: 'Ali Valiyev' })
  fullName!: string;

  @IsString()
  @MaxLength(64)
  @ApiProperty({ example: 'ali@example.com' })
  login!: string;

  @IsEnum(LoginType)
  @ApiProperty({ enum: LoginType, example: LoginType.EMAIL })
  loginType!: LoginType;

  @IsString()
  @IsOptional()
  @MaxLength(128)
  @ApiProperty({ required: false, example: 'password123' })
  password?: string;

  @IsDateString()
  @IsOptional()
  @ApiProperty({ required: false, example: '2000-01-01' })
  birthDate?: string;
}
