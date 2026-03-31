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
import { CourseCategoryAdminService } from '../service/courseCategory.admin.service';
import { CourseCategoryListAdminDto } from '../dtos/admin/courseCategory.list.admin.dto';
import { CourseCategoryDetailAdminDto } from '../dtos/admin/courseCategory.detail.admin.dto';
import { CourseCategoryCreateAdminDto } from '../dtos/admin/courseCategory.create.admin.dto';
import { CourseCategoryUpdateAdminDto } from '../dtos/admin/courseCategory.update.admin.dto';

@ApiTags('Admin / Course Categories')
@ApiBearerAuth('Bearer')
@UseGuards(RolesGuard)
@Roles(UserRole.ADMIN, UserRole.SUPER_ADMIN)
@Controller('admin/course-categories')
export class CourseCategoryAdminController {
  constructor(private readonly service: CourseCategoryAdminService) {}
  @Get()
  @ApiOperation({ summary: 'Get all' })
  @ApiOkResponse({ type: () => CourseCategoryListAdminDto, isArray: true })
  getAll() {
    return this.service.getAll();
  }
  @Get(':id')
  @ApiOperation({ summary: 'Get by id' })
  @ApiOkResponse({ type: () => CourseCategoryDetailAdminDto })
  getOne(@Param('id') id: number) {
    return this.service.getOne(id);
  }
  @Post()
  @ApiOperation({ summary: 'Create' })
  @ApiOkResponse({ type: () => CourseCategoryDetailAdminDto })
  create(@Body() payload: CourseCategoryCreateAdminDto) {
    return this.service.create(payload);
  }
  @Patch(':id')
  @ApiOperation({ summary: 'Update' })
  @ApiOkResponse({ type: () => CourseCategoryDetailAdminDto })
  update(
    @Param('id') id: number,
    @Body() payload: CourseCategoryUpdateAdminDto,
  ) {
    return this.service.update(id, payload);
  }
  @Delete(':id')
  @ApiOperation({ summary: 'Delete' })
  delete(@Param('id') id: number) {
    return this.service.delete(id);
  }
}
