import { ApiProperty } from '@nestjs/swagger';
import { IsString, MaxLength } from 'class-validator';

export class ColorCreateAdminDto {
  @IsString()
  @MaxLength(128)
  @ApiProperty({ example: 'Qizil' })
  title!: string;

  @IsString()
  @MaxLength(10)
  @ApiProperty({ example: '#FF0000' })
  color!: string;
}
