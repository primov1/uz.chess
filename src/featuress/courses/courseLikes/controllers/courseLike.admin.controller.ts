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
import { CourseLikeAdminService } from '../service/courseLike.admin.service';
import { CourseLikeListAdminDto } from '../dtos/admin/courseLike.list.admin.dto';
import { CourseLikeDetailAdminDto } from '../dtos/admin/courseLike.detail.admin.dto';
import { CourseLikeCreateAdminDto } from '../dtos/admin/courseLike.create.admin.dto';
import { CourseLikeUpdateAdminDto } from '../dtos/admin/courseLike.update.admin.dto';

@ApiTags('Admin / Course Likes')
@ApiBearerAuth('Bearer')
@UseGuards(RolesGuard)
@Roles(UserRole.ADMIN, UserRole.SUPER_ADMIN)
@Controller('admin/course-likes')
export class CourseLikeAdminController {
  constructor(private readonly service: CourseLikeAdminService) {}
  @Get()
  @ApiOperation({ summary: 'Get all' })
  @ApiOkResponse({ type: () => CourseLikeListAdminDto, isArray: true })
  getAll() {
    return this.service.getAll();
  }
  @Get(':id')
  @ApiOperation({ summary: 'Get by id' })
  @ApiOkResponse({ type: () => CourseLikeDetailAdminDto })
  getOne(@Param('id') id: number) {
    return this.service.getOne(id);
  }
  @Post()
  @ApiOperation({ summary: 'Create' })
  @ApiOkResponse({ type: () => CourseLikeDetailAdminDto })
  create(@Body() payload: CourseLikeCreateAdminDto) {
    return this.service.create(payload);
  }
  @Patch(':id')
  @ApiOperation({ summary: 'Update' })
  @ApiOkResponse({ type: () => CourseLikeDetailAdminDto })
  update(@Param('id') id: number, @Body() payload: CourseLikeUpdateAdminDto) {
    return this.service.update(id, payload);
  }
  @Delete(':id')
  @ApiOperation({ summary: 'Delete' })
  delete(@Param('id') id: number) {
    return this.service.delete(id);
  }
}
