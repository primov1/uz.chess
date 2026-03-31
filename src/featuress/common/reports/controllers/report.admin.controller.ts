import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
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
import { ReportAdminService } from '../service/report.admin.service';
import { ReportListAdminDto } from '../dtos/admin/report.list.admin.dto';
import { ReportDetailAdminDto } from '../dtos/admin/report.detail.admin.dto';
import { ReportCreateAdminDto } from '../dtos/admin/report.create.admin.dto';
import { ReportUpdateAdminDto } from '../dtos/admin/report.update.admin.dto';

@ApiTags('Admin / Reports')
@ApiBearerAuth('Bearer')
@UseGuards(RolesGuard)
@Roles(UserRole.ADMIN, UserRole.SUPER_ADMIN)
@Controller('admin/reports')
export class ReportAdminController {
  constructor(private readonly service: ReportAdminService) {}
  @Get()
  @ApiOperation({ summary: 'Get all' })
  @ApiOkResponse({ type: () => ReportListAdminDto, isArray: true })
  getAll() {
    return this.service.getAll();
  }
  @Get(':id')
  @ApiOperation({ summary: 'Get by id' })
  @ApiOkResponse({ type: () => ReportDetailAdminDto })
  getOne(@Param('id') id: number) {
    return this.service.getOne(id);
  }
  @Post()
  @ApiOperation({ summary: 'Create' })
  @ApiOkResponse({ type: () => ReportDetailAdminDto })
  create(@Body() payload: ReportCreateAdminDto) {
    return this.service.create(payload);
  }
  @Patch(':id')
  @ApiOperation({ summary: 'Update' })
  @ApiOkResponse({ type: () => ReportDetailAdminDto })
  update(@Param('id') id: number, @Body() payload: ReportUpdateAdminDto) {
    return this.service.update(id, payload);
  }
  @Delete(':id')
  @ApiOperation({ summary: 'Delete' })
  delete(@Param('id') id: number) {
    return this.service.delete(id);
  }
}
