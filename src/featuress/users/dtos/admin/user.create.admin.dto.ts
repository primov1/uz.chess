import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import {
  IsDateString,
  IsEnum,
  IsOptional,
  IsString,
  MaxLength,
} from 'class-validator';
import { LoginType, UserRole } from '../../entities/user.entity';

export class UserCreateAdminDto {
  @IsEnum(UserRole)
  @IsOptional()
  @ApiPropertyOptional({ enum: UserRole })
  role?: UserRole;
  @IsString()
  @MaxLength(64)
  @ApiProperty()
  fullName!: string;
  @IsString()
  @MaxLength(128)
  @IsOptional()
  @ApiPropertyOptional({
    description: 'Profile image path — set automatically if file uploaded',
  })
  profileImage?: string;
  @IsString()
  @MaxLength(64)
  @ApiProperty()
  login!: string;
  @IsEnum(LoginType)
  @ApiProperty({ enum: LoginType })
  loginType!: LoginType;
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
