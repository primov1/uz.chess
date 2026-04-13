import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import {
  IsNumber,
  IsOptional,
  IsString,
  MaxLength,
  Min,
} from 'class-validator';

export class CourseCreateAdminDto {
  @IsNumber()
  @ApiProperty()
  authorId!: number;
  @IsNumber()
  @ApiProperty()
  categoryId!: number;
  @IsNumber()
  @ApiProperty()
  languageId!: number;
  @IsNumber()
  @ApiProperty()
  difficultyId!: number;
  @IsString()
  @MaxLength(128)
  @ApiProperty()
  title!: string;
  @IsString()
  @MaxLength(128)
  @IsOptional()
  @ApiPropertyOptional({ description: 'Set automatically if file uploaded' })
  image?: string;
  @IsNumber()
  @Min(0)
  @ApiProperty()
  price!: number;
  @IsNumber()
  @Min(0)
  @IsOptional()
  @ApiPropertyOptional()
  newPrice?: number;
}
