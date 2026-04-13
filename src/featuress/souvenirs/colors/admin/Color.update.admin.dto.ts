import { ApiPropertyOptional } from '@nestjs/swagger';
import { IsOptional, IsString, MaxLength } from 'class-validator';

export class ColorUpdateAdminDto {
  @IsString()
  @MaxLength(128)
  @IsOptional()
  @ApiPropertyOptional()
  title?: string;

  @IsString()
  @MaxLength(10)
  @IsOptional()
  @ApiPropertyOptional()
  color?: string;
}
