import { ApiProperty } from '@nestjs/swagger';
import { IsNumber } from 'class-validator';

export class BookLikeCreateAdminDto {
  @IsNumber()
  @ApiProperty()
  userId!: number;

  @IsNumber()
  @ApiProperty()
  bookId!: number;
}
