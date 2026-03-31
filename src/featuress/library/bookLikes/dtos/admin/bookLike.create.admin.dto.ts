import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import {
  IsNumber,
  IsOptional,
  IsString,
} from 'class-validator';

export class BookLikeCreateAdminDto {
  @IsNumber()
  @ApiProperty()
  userId!: number;

  @IsNumber()
  @ApiProperty()
  bookId!: number;

}
