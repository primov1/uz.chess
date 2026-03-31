import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsNumber, IsOptional, IsString, Max, MaxLength, Min } from 'class-validator';

export class BookReviewCreateAdminDto {
  @IsNumber()
  @ApiProperty()
  userId!: number;

  @IsNumber()
  @ApiProperty()
  bookId!: number;

  @IsNumber()
  @Min(1)
  @Max(5)
  @ApiProperty({ minimum: 1, maximum: 5 })
  rating!: number;

  @IsString()
  @MaxLength(512)
  @IsOptional()
  @ApiPropertyOptional()
  comment?: string;
}
