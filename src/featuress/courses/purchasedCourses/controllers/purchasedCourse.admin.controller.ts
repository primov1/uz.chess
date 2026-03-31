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
import { PurchasedCourseAdminService } from '../service/purchasedCourse.admin.service';
import { PurchasedCourseListAdminDto } from '../dtos/admin/purchasedCourse.list.admin.dto';
import { PurchasedCourseDetailAdminDto } from '../dtos/admin/purchasedCourse.detail.admin.dto';
import { PurchasedCourseCreateAdminDto } from '../dtos/admin/purchasedCourse.create.admin.dto';
import { PurchasedCourseUpdateAdminDto } from '../dtos/admin/purchasedCourse.update.admin.dto';

@ApiTags('Admin / Purchased Courses')
@ApiBearerAuth('Bearer')
@UseGuards(RolesGuard)
@Roles(UserRole.ADMIN, UserRole.SUPER_ADMIN)
@Controller('admin/purchased-courses')
export class PurchasedCourseAdminController {
  constructor(private readonly service: PurchasedCourseAdminService) {}
  @Get()
  @ApiOperation({ summary: 'Get all' })
  @ApiOkResponse({ type: () => PurchasedCourseListAdminDto, isArray: true })
  getAll() {
    return this.service.getAll();
  }
  @Get(':id')
  @ApiOperation({ summary: 'Get by id' })
  @ApiOkResponse({ type: () => PurchasedCourseDetailAdminDto })
  getOne(@Param('id') id: number) {
    return this.service.getOne(id);
  }
  @Post()
  @ApiOperation({ summary: 'Create' })
  @ApiOkResponse({ type: () => PurchasedCourseDetailAdminDto })
  create(@Body() payload: PurchasedCourseCreateAdminDto) {
    return this.service.create(payload);
  }
  @Patch(':id')
  @ApiOperation({ summary: 'Update' })
  @ApiOkResponse({ type: () => PurchasedCourseDetailAdminDto })
  update(
    @Param('id') id: number,
    @Body() payload: PurchasedCourseUpdateAdminDto,
  ) {
    return this.service.update(id, payload);
  }
  @Delete(':id')
  @ApiOperation({ summary: 'Delete' })
  delete(@Param('id') id: number) {
    return this.service.delete(id);
  }
}
