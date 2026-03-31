import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import {
  IsNumber,
  IsOptional,
  IsString,
  MaxLength,
  Min,
} from 'class-validator';

export class PlayerCreateAdminDto {
  @IsNumber()
  @ApiProperty()
  countryId!: number;
  @IsString()
  @MaxLength(64)
  @ApiProperty()
  fullName!: string;
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
