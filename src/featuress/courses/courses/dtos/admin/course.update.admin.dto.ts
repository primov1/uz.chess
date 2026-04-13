import { ApiPropertyOptional } from '@nestjs/swagger';
import {
  IsNumber,
  IsOptional,
  IsString,
  MaxLength,
  Min,
} from 'class-validator';

export class CourseUpdateAdminDto {
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
}
