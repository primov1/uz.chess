import { ApiPropertyOptional } from '@nestjs/swagger';
import {
  IsNumber,
  IsOptional,
  IsString,
} from 'class-validator';

export class BookLikeUpdateAdminDto {
  @IsNumber()
  @IsOptional()
  @ApiPropertyOptional()
  userId?: number;

  @IsNumber()
  @IsOptional()
  @ApiPropertyOptional()
  bookId?: number;

}
