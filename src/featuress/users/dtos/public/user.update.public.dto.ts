import { ApiPropertyOptional } from '@nestjs/swagger';
import {
  IsDateString,
  IsOptional,
  IsString,
  MaxLength,
} from 'class-validator';

export class UserUpdatePublicDto {
  @IsString()
  @MaxLength(64)
  @IsOptional()
  @ApiPropertyOptional()
  fullName?: string;
  @IsString()
  @MaxLength(128)
  @IsOptional()
  @ApiPropertyOptional()
  profileImage?: string;
  @IsString()
  @MaxLength(128)
  @IsOptional()
  @ApiPropertyOptional()
  password?: string;
  @IsDateString()
  @IsOptional()
  @ApiPropertyOptional()
  birthDate?: string;
}
