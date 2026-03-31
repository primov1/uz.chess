import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  UseGuards,
} from '@nestjs/common';
import { ApiBearerAuth, ApiOperation, ApiTags } from '@nestjs/swagger';
import { Roles } from '../../../auth/decorators/roles.decorator';
import { RolesGuard } from '../../../auth/guards/roles.guard';
import { UserRole } from '../../../users/entities/user.entity';
import { OtpCodeAdminService } from '../service/otpCode.admin.service';
import { OtpCodeCreateAdminDto } from '../dtos/admin/otpCode.create.admin.dto';

@ApiTags('Admin / OTP Codes')
@ApiBearerAuth('Bearer')
@UseGuards(RolesGuard)
@Roles(UserRole.ADMIN, UserRole.SUPER_ADMIN)
@Controller('admin/otp-codes')
export class OtpCodeAdminController {
  constructor(private readonly service: OtpCodeAdminService) {}
  @Get()
  @ApiOperation({ summary: 'Get all otp codes' })
  getAll() {
    return this.service.getAll();
  }
  @Post()
  @ApiOperation({ summary: 'Create otp code' })
  create(@Body() payload: OtpCodeCreateAdminDto) {
    return this.service.create(payload);
  }
  @Delete(':id')
  @ApiOperation({ summary: 'Delete otp code' })
  delete(@Param('id') id: number) {
    return this.service.delete(id);
  }
}
