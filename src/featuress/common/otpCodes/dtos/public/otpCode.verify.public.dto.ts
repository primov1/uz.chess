import { ApiProperty } from '@nestjs/swagger';
import { IsEnum, IsString, Length } from 'class-validator';
import { OtpType } from '../../entities/otpCode.entity';

export class OtpCodeVerifyPublicDto {
  @IsString()
  @Length(6, 6)
  @ApiProperty()
  code!: string;
  @IsEnum(OtpType)
  @ApiProperty({ enum: OtpType })
  type!: OtpType;
}
