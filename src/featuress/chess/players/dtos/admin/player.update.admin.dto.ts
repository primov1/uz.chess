import { ApiPropertyOptional } from '@nestjs/swagger';
import {
  IsNumber,
  IsOptional,
  IsString,
  MaxLength,
  Min,
} from 'class-validator';

export class PlayerUpdateAdminDto {
  @IsNumber()
  @IsOptional()
  @ApiPropertyOptional()
  countryId?: number;
  @IsString()
  @MaxLength(64)
  @IsOptional()
  @ApiPropertyOptional()
  fullName?: string;
  @IsString()
  @MaxLength(128)
  @IsOptional()
  @ApiPropertyOptional()
  image?: string;
  @IsNumber()
  @Min(0)
  @IsOptional()
  @ApiPropertyOptional()
  classic?: number;
  @IsNumber()
  @Min(0)
  @IsOptional()
  @ApiPropertyOptional()
  rapid?: number;
  @IsNumber()
  @Min(0)
  @IsOptional()
  @ApiPropertyOptional()
  blitz?: number;
}
