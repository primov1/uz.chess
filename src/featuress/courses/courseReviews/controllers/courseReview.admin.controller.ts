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
import { CourseReviewAdminService } from '../service/courseReview.admin.service';
import { CourseReviewListAdminDto } from '../dtos/admin/courseReview.list.admin.dto';
import { CourseReviewDetailAdminDto } from '../dtos/admin/courseReview.detail.admin.dto';
import { CourseReviewCreateAdminDto } from '../dtos/admin/courseReview.create.admin.dto';
import { CourseReviewUpdateAdminDto } from '../dtos/admin/courseReview.update.admin.dto';

@ApiTags('Admin / Course Reviews')
@ApiBearerAuth('Bearer')
@UseGuards(RolesGuard)
@Roles(UserRole.ADMIN, UserRole.SUPER_ADMIN)
@Controller('admin/course-reviews')
export class CourseReviewAdminController {
  constructor(private readonly service: CourseReviewAdminService) {}
  @Get()
  @ApiOperation({ summary: 'Get all' })
  @ApiOkResponse({ type: () => CourseReviewListAdminDto, isArray: true })
  getAll() {
    return this.service.getAll();
  }
  @Get(':id')
  @ApiOperation({ summary: 'Get by id' })
  @ApiOkResponse({ type: () => CourseReviewDetailAdminDto })
  getOne(@Param('id') id: number) {
    return this.service.getOne(id);
  }
  @Post()
  @ApiOperation({ summary: 'Create' })
  @ApiOkResponse({ type: () => CourseReviewDetailAdminDto })
  create(@Body() payload: CourseReviewCreateAdminDto) {
    return this.service.create(payload);
  }
  @Patch(':id')
  @ApiOperation({ summary: 'Update' })
  @ApiOkResponse({ type: () => CourseReviewDetailAdminDto })
  update(@Param('id') id: number, @Body() payload: CourseReviewUpdateAdminDto) {
    return this.service.update(id, payload);
  }
  @Delete(':id')
  @ApiOperation({ summary: 'Delete' })
  delete(@Param('id') id: number) {
    return this.service.delete(id);
  }
}
