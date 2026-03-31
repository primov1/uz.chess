import { ApiPropertyOptional } from '@nestjs/swagger';
import {
  IsDateString,
  IsNumber,
  IsOptional,
  IsString,
  MaxLength,
  Min,
} from 'class-validator';

export class BookUpdateAdminDto {
  @IsNumber()
  @IsOptional()
  @ApiPropertyOptional()
  authorId?: number;

  @IsNumber()
  @IsOptional()
  @ApiPropertyOptional()
  categoryId?: number;

  @IsNumber()
  @IsOptional()
  @ApiPropertyOptional()
  languageId?: number;

  @IsNumber()
  @IsOptional()
  @ApiPropertyOptional()
  difficultyId?: number;

  @IsString()
  @MaxLength(128)
  @IsOptional()
  @ApiPropertyOptional()
  title?: string;

  @IsString()
  @IsOptional()
  @ApiPropertyOptional()
  description?: string;

  @IsString()
  @MaxLength(128)
  @IsOptional()
  @ApiPropertyOptional()
  image?: string;

  @IsNumber()
  @Min(0)
  @IsOptional()
  @ApiPropertyOptional()
  price?: number;

  @IsNumber()
  @Min(0)
  @IsOptional()
  @ApiPropertyOptional()
  newPrice?: number;

  @IsNumber()
  @Min(1)
  @IsOptional()
  @ApiPropertyOptional()
  pages?: number;

  @IsDateString()
  @IsOptional()
  @ApiPropertyOptional()
  pubDate?: string;
}
