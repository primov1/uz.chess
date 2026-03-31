import { ApiPropertyOptional } from '@nestjs/swagger';
import { IsOptional, IsString, MaxLength } from 'class-validator';

export class LanguageUpdateAdminDto {
  @IsString()
  @MaxLength(32)
  @IsOptional()
  @ApiPropertyOptional()
  title?: string;

  @IsString()
  @MaxLength(2)
  @IsOptional()
  @ApiPropertyOptional()
  code?: string;
}
