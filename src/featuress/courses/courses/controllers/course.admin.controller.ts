import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  UploadedFile,
  UseGuards,
  UseInterceptors,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
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
import { CourseAdminService } from '../service/course.admin.service';
import { CourseListAdminDto } from '../dtos/admin/course.list.admin.dto';
import { CourseDetailAdminDto } from '../dtos/admin/course.detail.admin.dto';
import { CourseCreateAdminDto } from '../dtos/admin/course.create.admin.dto';
import { CourseUpdateAdminDto } from '../dtos/admin/course.update.admin.dto';
import { multerConfig } from '../../../upload/multer.config';

@ApiTags('Admin / Courses')
@ApiBearerAuth('Bearer')
@UseGuards(RolesGuard)
@Roles(UserRole.ADMIN, UserRole.SUPER_ADMIN)
@Controller('admin/courses')
export class CourseAdminController {
  constructor(private readonly service: CourseAdminService) {}
  @Get()
  @ApiOperation({ summary: 'Get all' })
  @ApiOkResponse({ type: () => CourseListAdminDto, isArray: true })
  getAll() {
    return this.service.getAll();
  }
  @Get(':id')
  @ApiOperation({ summary: 'Get by id' })
  @ApiOkResponse({ type: () => CourseDetailAdminDto })
  getOne(@Param('id') id: number) {
    return this.service.getOne(id);
  }

  @Post()
  @ApiOperation({ summary: 'Create course (image upload optional)' })
  @ApiConsumes('multipart/form-data')
  @ApiBody({
    schema: {
      type: 'object',
      required: [
        'authorId',
        'categoryId',
        'languageId',
        'difficultyId',
        'title',
        'price',
      ],
      properties: {
        authorId: { type: 'number' },
        categoryId: { type: 'number' },
        languageId: { type: 'number' },
        difficultyId: { type: 'number' },
        title: { type: 'string', maxLength: 128 },
        image: {
          type: 'string',
          format: 'binary',
          description: 'Course cover image (optional)',
        },
        price: { type: 'number' },
        newPrice: { type: 'number' },
      },
    },
  })
  @ApiOkResponse({ type: () => CourseDetailAdminDto })
  @UseInterceptors(FileInterceptor('image', multerConfig))
  create(
    @Body() payload: CourseCreateAdminDto,
    @UploadedFile() file?: Express.Multer.File,
  ) {
    if (file) payload.image = `/uploads/${file.filename}`;
    return this.service.create(payload);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Update course (image upload optional)' })
  @ApiConsumes('multipart/form-data')
  @ApiBody({
    schema: {
      type: 'object',
      properties: {
        authorId: { type: 'number' },
        categoryId: { type: 'number' },
        languageId: { type: 'number' },
        difficultyId: { type: 'number' },
        title: { type: 'string', maxLength: 128 },
        image: {
          type: 'string',
          format: 'binary',
          description: 'New cover image (optional)',
        },
        price: { type: 'number' },
        newPrice: { type: 'number' },
      },
    },
  })
  @ApiOkResponse({ type: () => CourseDetailAdminDto })
  @UseInterceptors(FileInterceptor('image', multerConfig))
  update(
    @Param('id') id: number,
    @Body() payload: CourseUpdateAdminDto,
    @UploadedFile() file?: Express.Multer.File,
  ) {
    if (file) payload.image = `/uploads/${file.filename}`;
    return this.service.update(id, payload);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete' })
  delete(@Param('id') id: number) {
    return this.service.delete(id);
  }
}
