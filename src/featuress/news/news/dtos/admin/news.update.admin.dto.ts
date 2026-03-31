import { ApiPropertyOptional } from '@nestjs/swagger';
import { IsOptional, IsString, MaxLength } from 'class-validator';

export class NewsUpdateAdminDto {
  @IsString()
  @MaxLength(256)
  @IsOptional()
  @ApiPropertyOptional()
  title?: string;

  @IsString()
  @MaxLength(128)
  @IsOptional()
  @ApiPropertyOptional({ description: 'Image path' })
  image?: string;

  @IsString()
  @IsOptional()
  @ApiPropertyOptional()
  content?: string;
}
