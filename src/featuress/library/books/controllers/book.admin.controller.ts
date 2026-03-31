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
import { BookAdminService } from '../service/book.admin.service';
import { BookListAdminDto } from '../dtos/admin/book.list.admin.dto';
import { BookDetailAdminDto } from '../dtos/admin/book.detail.admin.dto';
import { BookCreateAdminDto } from '../dtos/admin/book.create.admin.dto';
import { BookUpdateAdminDto } from '../dtos/admin/book.update.admin.dto';
import { multerConfig } from '../../../upload/multer.config';

@ApiTags('Admin / Books')
@ApiBearerAuth('Bearer')
@UseGuards(RolesGuard)
@Roles(UserRole.ADMIN, UserRole.SUPER_ADMIN)
@Controller('admin/books')
export class BookAdminController {
  constructor(private readonly bookAdminService: BookAdminService) {}

  @Get()
  @ApiOperation({ summary: 'Get all books' })
  @ApiOkResponse({ type: () => BookListAdminDto, isArray: true })
  getAll() {
    return this.bookAdminService.getAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get book by id' })
  @ApiOkResponse({ type: () => BookDetailAdminDto })
  getOne(@Param('id') id: number) {
    return this.bookAdminService.getOne(id);
  }

  @Post()
  @ApiOperation({ summary: 'Create book (image upload optional)' })
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
        'description',
        'price',
        'pages',
        'pubDate',
      ],
      properties: {
        authorId: { type: 'number' },
        categoryId: { type: 'number' },
        languageId: { type: 'number' },
        difficultyId: { type: 'number' },
        title: { type: 'string', maxLength: 128 },
        description: { type: 'string' },
        image: {
          type: 'string',
          format: 'binary',
          description: 'Book cover image (optional)',
        },
        price: { type: 'number' },
        newPrice: { type: 'number' },
        pages: { type: 'number' },
        pubDate: { type: 'string', description: 'ISO date' },
      },
    },
  })
  @ApiOkResponse({ type: () => BookDetailAdminDto })
  @UseInterceptors(FileInterceptor('image', multerConfig))
  create(
    @Body() payload: BookCreateAdminDto,
    @UploadedFile() file?: Express.Multer.File,
  ) {
    if (file) payload.image = `/uploads/${file.filename}`;
    return this.bookAdminService.create(payload);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Update book (image upload optional)' })
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
        description: { type: 'string' },
        image: {
          type: 'string',
          format: 'binary',
          description: 'New cover image (optional)',
        },
        price: { type: 'number' },
        newPrice: { type: 'number' },
        pages: { type: 'number' },
        pubDate: { type: 'string' },
      },
    },
  })
  @ApiOkResponse({ type: () => BookDetailAdminDto })
  @UseInterceptors(FileInterceptor('image', multerConfig))
  update(
    @Param('id') id: number,
    @Body() payload: BookUpdateAdminDto,
    @UploadedFile() file?: Express.Multer.File,
  ) {
    if (file) payload.image = `/uploads/${file.filename}`;
    return this.bookAdminService.update(id, payload);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete book' })
  delete(@Param('id') id: number) {
    return this.bookAdminService.delete(id);
  }
}
