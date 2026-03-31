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
import { LanguageAdminService } from '../service/language.admin.service';
import { LanguageListAdminDto } from '../dtos/admin/language.list.admin.dto';
import { LanguageDetailAdminDto } from '../dtos/admin/language.detail.admin.dto';
import { LanguageCreateAdminDto } from '../dtos/admin/language.create.admin.dto';
import { LanguageUpdateAdminDto } from '../dtos/admin/language.update.admin.dto';

@ApiTags('Admin / Languages')
@ApiBearerAuth('Bearer')
@UseGuards(RolesGuard)
@Roles(UserRole.ADMIN, UserRole.SUPER_ADMIN)
@Controller('admin/languages')
export class LanguageAdminController {
  constructor(private readonly service: LanguageAdminService) {}
  @Get()
  @ApiOperation({ summary: 'Get all' })
  @ApiOkResponse({ type: () => LanguageListAdminDto, isArray: true })
  getAll() {
    return this.service.getAll();
  }
  @Get(':id')
  @ApiOperation({ summary: 'Get by id' })
  @ApiOkResponse({ type: () => LanguageDetailAdminDto })
  getOne(@Param('id') id: number) {
    return this.service.getOne(id);
  }
  @Post()
  @ApiOperation({ summary: 'Create' })
  @ApiOkResponse({ type: () => LanguageDetailAdminDto })
  create(@Body() payload: LanguageCreateAdminDto) {
    return this.service.create(payload);
  }
  @Patch(':id')
  @ApiOperation({ summary: 'Update' })
  @ApiOkResponse({ type: () => LanguageDetailAdminDto })
  update(@Param('id') id: number, @Body() payload: LanguageUpdateAdminDto) {
    return this.service.update(id, payload);
  }
  @Delete(':id')
  @ApiOperation({ summary: 'Delete' })
  delete(@Param('id') id: number) {
    return this.service.delete(id);
  }
}
