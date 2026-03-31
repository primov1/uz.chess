import { ApiPropertyOptional } from '@nestjs/swagger';
import {
  IsBoolean,
  IsDateString,
  IsEnum,
  IsOptional,
  IsString,
  MaxLength,
} from 'class-validator';
import { UserRole } from '../../entities/user.entity';

export class UserUpdateAdminDto {
  @IsEnum(UserRole)
  @IsOptional()
  @ApiPropertyOptional({ enum: UserRole })
  role?: UserRole;
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
  @IsBoolean()
  @IsOptional()
  @ApiPropertyOptional()
  isVerified?: boolean;
  @IsBoolean()
  @IsOptional()
  @ApiPropertyOptional()
  isActive?: boolean;
}
