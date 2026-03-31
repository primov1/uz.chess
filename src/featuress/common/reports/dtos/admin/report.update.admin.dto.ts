import { ApiPropertyOptional } from '@nestjs/swagger';
import { IsNumber, IsOptional, IsString, MaxLength } from 'class-validator';

export class ReportUpdateAdminDto {
  @IsNumber()
  @IsOptional()
  @ApiPropertyOptional()
  reportCategoryId?: number;

  @IsString()
  @MaxLength(256)
  @IsOptional()
  @ApiPropertyOptional()
  description?: string;
}
