import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  UploadedFiles,
  UseGuards,
  UseInterceptors,
} from '@nestjs/common';
import { FileFieldsInterceptor } from '@nestjs/platform-express';
import {
  ApiBearerAuth,
  ApiBody,
  ApiConsumes,
  ApiOkResponse,
  ApiOperation,
  ApiTags,
} from '@nestjs/swagger';
import { Roles } from '../../../auth/decorators/roles.decorator';
import { RolesGuard } from '../../../auth/guards/roles.guard';
import { UserRole } from '../../../users/entities/user.entity';
import { CourseLessonAdminService } from '../service/courseLesson.admin.service';
import { CourseLessonListAdminDto } from '../dtos/admin/courseLesson.list.admin.dto';
import { CourseLessonDetailAdminDto } from '../dtos/admin/courseLesson.detail.admin.dto';
import { CourseLessonCreateAdminDto } from '../dtos/admin/courseLesson.create.admin.dto';
import { CourseLessonUpdateAdminDto } from '../dtos/admin/courseLesson.update.admin.dto';
import { multerMixedConfig } from '../../../upload/multer.config';

@ApiTags('Admin / Course Lessons')
@ApiBearerAuth('Bearer')
@UseGuards(RolesGuard)
@Roles(UserRole.ADMIN, UserRole.SUPER_ADMIN)
@Controller('admin/course-lessons')
export class CourseLessonAdminController {
  constructor(private readonly service: CourseLessonAdminService) {}

  @Get()
  @ApiOperation({ summary: 'Get all' })
  @ApiOkResponse({ type: () => CourseLessonListAdminDto, isArray: true })
  getAll() {
    return this.service.getAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get by id' })
  @ApiOkResponse({ type: () => CourseLessonDetailAdminDto })
  getOne(@Param('id') id: number) {
    return this.service.getOne(id);
  }

  @Post()
  @ApiOperation({
    summary: 'Create lesson (thumbnail & video upload optional)',
  })
  @ApiConsumes('multipart/form-data')
  @ApiBody({
    schema: {
      type: 'object',
      required: ['courseId', 'courseSectionId', 'title', 'video'],
      properties: {
        courseId: { type: 'number' },
        courseSectionId: { type: 'number' },
        title: { type: 'string', maxLength: 128 },
        content: { type: 'string' },
        thumbnail: {
          type: 'string',
          format: 'binary',
          description: 'Thumbnail image (optional)',
        },
        video: {
          type: 'string',
          format: 'binary',
          description: 'Video file (optional)',
        },
        order: { type: 'number' },
        isFree: { type: 'boolean' },
      },
    },
  })
  @ApiOkResponse({ type: () => CourseLessonDetailAdminDto })
  @UseInterceptors(
    FileFieldsInterceptor(
      [
        { name: 'thumbnail', maxCount: 1 },
        { name: 'video', maxCount: 1 },
      ],
      multerMixedConfig,
    ),
  )
  create(
    @Body() payload: CourseLessonCreateAdminDto,
    @UploadedFiles()
    files?: {
      thumbnail?: Express.Multer.File[];
      video?: Express.Multer.File[];
    },
  ) {
    if (files?.thumbnail?.[0])
      payload.thumbnail = `/uploads/${files.thumbnail[0].filename}`;
    if (files?.video?.[0])
      payload.video = `/uploads/${files.video[0].filename}`;
    return this.service.create(payload);
  }

  @Patch(':id')
  @ApiOperation({
    summary: 'Update lesson (thumbnail & video upload optional)',
  })
  @ApiConsumes('multipart/form-data')
  @ApiBody({
    schema: {
      type: 'object',
      properties: {
        courseId: { type: 'number' },
        courseSectionId: { type: 'number' },
        title: { type: 'string', maxLength: 128 },
        content: { type: 'string' },
        thumbnail: {
          type: 'string',
          format: 'binary',
          description: 'New thumbnail image (optional)',
        },
        video: {
          type: 'string',
          format: 'binary',
          description: 'New video file (optional)',
        },
        order: { type: 'number' },
        isFree: { type: 'boolean' },
      },
    },
  })
  @ApiOkResponse({ type: () => CourseLessonDetailAdminDto })
  @UseInterceptors(
    FileFieldsInterceptor(
      [
        { name: 'thumbnail', maxCount: 1 },
        { name: 'video', maxCount: 1 },
      ],
      multerMixedConfig,
    ),
  )
  update(
    @Param('id') id: number,
    @Body() payload: CourseLessonUpdateAdminDto,
    @UploadedFiles()
    files?: {
      thumbnail?: Express.Multer.File[];
      video?: Express.Multer.File[];
    },
  ) {
    if (files?.thumbnail?.[0])
      payload.thumbnail = `/uploads/${files.thumbnail[0].filename}`;
    if (files?.video?.[0])
      payload.video = `/uploads/${files.video[0].filename}`;
    return this.service.update(id, payload);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete' })
  delete(@Param('id') id: number) {
    return this.service.delete(id);
  }
}
