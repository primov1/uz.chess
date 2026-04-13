import { ApiPropertyOptional } from '@nestjs/swagger';
import {
  IsNumber,
  IsOptional,
  IsString,
  Max,
  MaxLength,
  Min,
} from 'class-validator';

export class SouvenirReviewUpdateAdminDto {
  @IsNumber()
  @Min(1)
  @Max(5)
  @IsOptional()
  @ApiPropertyOptional({ minimum: 1, maximum: 5 })
  rating?: number;

  @IsString()
  @MaxLength(512)
  @IsOptional()
  @ApiPropertyOptional()
  comment?: string;
}
