import { IsString, IsEnum, MaxLength, Length } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { OtpType } from '../../../common/otpCodes/entities/otpCode.entity';

export class AuthVerifyOtpPublicDto {
  @IsString()
  @MaxLength(64)
  @ApiProperty({ example: 'ali@example.com' })
  login!: string;

  @IsString()
  @Length(6, 6)
  @ApiProperty({ example: '123456' })
  code!: string;

  @IsEnum(OtpType)
  @ApiProperty({ enum: OtpType })
  type!: OtpType;
}
