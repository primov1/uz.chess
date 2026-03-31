import { ApiPropertyOptional } from '@nestjs/swagger';
import {
  IsOptional,
  IsString,
  MaxLength,
} from 'class-validator';

export class CountryUpdateAdminDto {
  @IsString()
  @MaxLength(64)
  @IsOptional()
  @ApiPropertyOptional()
  title?: string;

  @IsString()
  @MaxLength(128)
  @IsOptional()
  @ApiPropertyOptional({
    description: 'Flag image path — set automatically if flag file is uploaded',
  })
  flag?: string;
}
