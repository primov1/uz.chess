import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsOptional, IsString, MaxLength } from 'class-validator';

export class CountryCreateAdminDto {
  @IsString()
  @MaxLength(64)
  @ApiProperty()
  title!: string;

  @IsString()
  @MaxLength(128)
  @IsOptional()
  @ApiPropertyOptional({
    description: 'Flag image path — set automatically if flag file is uploaded',
  })
  flag?: string;
}
