import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsOptional, IsString, MaxLength } from 'class-validator';

export class NewsCreateAdminDto {
  @IsString()
  @MaxLength(256)
  @ApiProperty()
  title!: string;

  @IsString()
  @MaxLength(128)
  @IsOptional()
  @ApiPropertyOptional({
    description: 'Image path — set automatically if file uploaded',
  })
  image?: string;

  @IsString()
  @ApiProperty()
  content!: string;
}
