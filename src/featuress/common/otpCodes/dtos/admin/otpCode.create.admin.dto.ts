import { ApiProperty } from '@nestjs/swagger';
import {
  IsDateString,
  IsEnum,
  IsNumber,
  IsString,
  Length,
} from 'class-validator';
import { OtpType } from '../../entities/otpCode.entity';

export class OtpCodeCreateAdminDto {
  @IsNumber()
  @ApiProperty()
  userId!: number;

  @IsString()
  @Length(6, 6)
  @ApiProperty()
  code!: string;

  @IsEnum(OtpType)
  @ApiProperty({ enum: OtpType })
  type!: OtpType;

  @IsDateString()
  @ApiProperty({ description: 'OTP expiration timestamp' })
  expiresAt!: string;
}
