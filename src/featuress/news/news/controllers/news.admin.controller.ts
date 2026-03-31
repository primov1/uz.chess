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
import { NewsAdminService } from '../service/news.admin.service';
import { NewsListAdminDto } from '../dtos/admin/news.list.admin.dto';
import { NewsDetailAdminDto } from '../dtos/admin/news.detail.admin.dto';
import { NewsCreateAdminDto } from '../dtos/admin/news.create.admin.dto';
import { NewsUpdateAdminDto } from '../dtos/admin/news.update.admin.dto';
import { multerConfig } from '../../../upload/multer.config';

@ApiTags('Admin / News')
@ApiBearerAuth('Bearer')
@UseGuards(RolesGuard)
@Roles(UserRole.ADMIN, UserRole.SUPER_ADMIN)
@Controller('admin/news')
export class NewsAdminController {
  constructor(private readonly service: NewsAdminService) {}

  @Get()
  @ApiOperation({ summary: 'Get all news' })
  @ApiOkResponse({ type: () => NewsListAdminDto, isArray: true })
  getAll() {
    return this.service.getAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get news by id' })
  @ApiOkResponse({ type: () => NewsDetailAdminDto })
  getOne(@Param('id') id: number) {
    return this.service.getOne(id);
  }

  @Post()
  @ApiOperation({ summary: 'Create news (image upload optional)' })
  @ApiConsumes('multipart/form-data')
  @ApiBody({
    schema: {
      type: 'object',
      required: ['title', 'content', 'date'],
      properties: {
        title: { type: 'string', maxLength: 256 },
        content: { type: 'string' },
        date: { type: 'string', description: 'ISO timestamp' },
        image: {
          type: 'string',
          format: 'binary',
          description: 'News image file (optional)',
        },
      },
    },
  })
  @ApiOkResponse({ type: () => NewsDetailAdminDto })
  @UseInterceptors(FileInterceptor('image', multerConfig))
  create(
    @Body() payload: NewsCreateAdminDto,
    @UploadedFile() file?: Express.Multer.File,
  ) {
    if (file) payload.image = `/uploads/${file.filename}`;
    return this.service.create(payload);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Update news (image upload optional)' })
  @ApiConsumes('multipart/form-data')
  @ApiBody({
    schema: {
      type: 'object',
      properties: {
        title: { type: 'string', maxLength: 256 },
        content: { type: 'string' },
        date: { type: 'string', description: 'ISO timestamp' },
        image: {
          type: 'string',
          format: 'binary',
          description: 'New image file (optional)',
        },
      },
    },
  })
  @ApiOkResponse({ type: () => NewsDetailAdminDto })
  @UseInterceptors(FileInterceptor('image', multerConfig))
  update(
    @Param('id') id: number,
    @Body() payload: NewsUpdateAdminDto,
    @UploadedFile() file?: Express.Multer.File,
  ) {
    if (file) payload.image = `/uploads/${file.filename}`;
    return this.service.update(id, payload);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete news' })
  delete(@Param('id') id: number) {
    return this.service.delete(id);
  }
}
