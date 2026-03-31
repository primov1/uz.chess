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
import { ReportCategoryAdminService } from '../service/reportCategory.admin.service';
import { ReportCategoryListAdminDto } from '../dtos/admin/reportCategory.list.admin.dto';
import { ReportCategoryDetailAdminDto } from '../dtos/admin/reportCategory.detail.admin.dto';
import { ReportCategoryCreateAdminDto } from '../dtos/admin/reportCategory.create.admin.dto';
import { ReportCategoryUpdateAdminDto } from '../dtos/admin/reportCategory.update.admin.dto';

@ApiTags('Admin / Report Categories')
@ApiBearerAuth('Bearer')
@UseGuards(RolesGuard)
@Roles(UserRole.ADMIN, UserRole.SUPER_ADMIN)
@Controller('admin/report-categories')
export class ReportCategoryAdminController {
  constructor(private readonly service: ReportCategoryAdminService) {}
  @Get()
  @ApiOperation({ summary: 'Get all' })
  @ApiOkResponse({ type: () => ReportCategoryListAdminDto, isArray: true })
  getAll() {
    return this.service.getAll();
  }
  @Get(':id')
  @ApiOperation({ summary: 'Get by id' })
  @ApiOkResponse({ type: () => ReportCategoryDetailAdminDto })
  getOne(@Param('id') id: number) {
    return this.service.getOne(id);
  }
  @Post()
  @ApiOperation({ summary: 'Create' })
  @ApiOkResponse({ type: () => ReportCategoryDetailAdminDto })
  create(@Body() payload: ReportCategoryCreateAdminDto) {
    return this.service.create(payload);
  }
  @Patch(':id')
  @ApiOperation({ summary: 'Update' })
  @ApiOkResponse({ type: () => ReportCategoryDetailAdminDto })
  update(
    @Param('id') id: number,
    @Body() payload: ReportCategoryUpdateAdminDto,
  ) {
    return this.service.update(id, payload);
  }
  @Delete(':id')
  @ApiOperation({ summary: 'Delete' })
  delete(@Param('id') id: number) {
    return this.service.delete(id);
  }
}
