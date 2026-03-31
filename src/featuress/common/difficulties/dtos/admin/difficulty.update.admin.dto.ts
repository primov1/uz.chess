import { ApiPropertyOptional } from '@nestjs/swagger';
import { Allow, IsOptional, IsString, MaxLength } from 'class-validator';

export class DifficultyUpdateAdminDto {
  @IsString()
  @MaxLength(32)
  @IsOptional()
  @ApiPropertyOptional()
  title?: string;

  @IsString()
  @MaxLength(128)
  @Allow()
  @IsOptional()
  icon?: string;
}
