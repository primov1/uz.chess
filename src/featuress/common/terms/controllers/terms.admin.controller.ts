import {
  Body,
  Controller,
  Get,
  Put,
  UseGuards,
} from '@nestjs/common';
import {
  ApiBearerAuth,
  ApiOkResponse,
  ApiOperation,
  ApiTags,
} from '@nestjs/swagger';
import { Roles } from '../../../auth/decorators/roles.decorator';
import { RolesGuard } from '../../../auth/guards/roles.guard';
import { UserRole } from '../../../users/entities/user.entity';
import { TermsAdminService } from '../service/terms.admin.service';
import { TermsUpdateAdminDto } from '../dtos/admin/terms.update.admin.dto';

@ApiTags('Admin / Terms')
@ApiBearerAuth('Bearer')
@UseGuards(RolesGuard)
@Roles(UserRole.ADMIN, UserRole.SUPER_ADMIN)
@Controller('admin/terms')
export class TermsAdminController {
  constructor(private readonly service: TermsAdminService) {}

  @Get()
  @ApiOperation({ summary: 'Get terms' })
  get() {
    return this.service.get();
  }

  @Put()
  @ApiOperation({ summary: 'Update terms' })
  @ApiOkResponse({ type: () => TermsUpdateAdminDto })
  update(@Body() payload: TermsUpdateAdminDto) {
    return this.service.update(payload);
  }
}
