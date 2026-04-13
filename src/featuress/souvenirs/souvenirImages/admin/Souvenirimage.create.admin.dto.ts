import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, IsOptional, IsString, MaxLength } from 'class-validator';

export class SouvenirImageCreateAdminDto {
  @IsNumber()
  @ApiProperty()
  souvenirId!: number;

  @IsString()
  @MaxLength(128)
  @IsOptional()
  @ApiProperty({ required: false })
  image?: string;
}
