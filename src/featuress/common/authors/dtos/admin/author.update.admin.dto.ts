import { ApiPropertyOptional } from '@nestjs/swagger';
import { IsOptional, IsString, MaxLength } from 'class-validator';

export class AuthorUpdateAdminDto {
  @IsString()
  @MaxLength(64)
  @IsOptional()
  @ApiPropertyOptional()
  fullName?: string;
}
