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
import { UserLessonAdminService } from '../service/userLesson.admin.service';
import { UserLessonListAdminDto } from '../dtos/admin/userLesson.list.admin.dto';
import { UserLessonDetailAdminDto } from '../dtos/admin/userLesson.detail.admin.dto';
import { UserLessonCreateAdminDto } from '../dtos/admin/userLesson.create.admin.dto';
import { UserLessonUpdateAdminDto } from '../dtos/admin/userLesson.update.admin.dto';

@ApiTags('Admin / User Lessons')
@ApiBearerAuth('Bearer')
@UseGuards(RolesGuard)
@Roles(UserRole.ADMIN, UserRole.SUPER_ADMIN)
@Controller('admin/user-lessons')
export class UserLessonAdminController {
  constructor(private readonly service: UserLessonAdminService) {}
  @Get()
  @ApiOperation({ summary: 'Get all' })
  @ApiOkResponse({ type: () => UserLessonListAdminDto, isArray: true })
  getAll() {
    return this.service.getAll();
  }
  @Get(':id')
  @ApiOperation({ summary: 'Get by id' })
  @ApiOkResponse({ type: () => UserLessonDetailAdminDto })
  getOne(@Param('id') id: number) {
    return this.service.getOne(id);
  }
  @Post()
  @ApiOperation({ summary: 'Create' })
  @ApiOkResponse({ type: () => UserLessonDetailAdminDto })
  create(@Body() payload: UserLessonCreateAdminDto) {
    return this.service.create(payload);
  }
  @Patch(':id')
  @ApiOperation({ summary: 'Update' })
  @ApiOkResponse({ type: () => UserLessonDetailAdminDto })
  update(@Param('id') id: number, @Body() payload: UserLessonUpdateAdminDto) {
    return this.service.update(id, payload);
  }
  @Delete(':id')
  @ApiOperation({ summary: 'Delete' })
  delete(@Param('id') id: number) {
    return this.service.delete(id);
  }
}
