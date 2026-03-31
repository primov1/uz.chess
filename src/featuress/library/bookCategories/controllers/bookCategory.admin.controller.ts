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
import { BookCategoryAdminService } from '../service/bookCategory.admin.service';
import { BookCategoryListAdminDto } from '../dtos/admin/bookCategory.list.admin.dto';
import { BookCategoryDetailAdminDto } from '../dtos/admin/bookCategory.detail.admin.dto';
import { BookCategoryCreateAdminDto } from '../dtos/admin/bookCategory.create.admin.dto';
import { BookCategoryUpdateAdminDto } from '../dtos/admin/bookCategory.update.admin.dto';

@ApiTags('Admin / Book Categories')
@ApiBearerAuth('Bearer')
@UseGuards(RolesGuard)
@Roles(UserRole.ADMIN, UserRole.SUPER_ADMIN)
@Controller('admin/book-categories')
export class BookCategoryAdminController {
  constructor(private readonly service: BookCategoryAdminService) {}

  @Get()
  @ApiOperation({ summary: 'Get all book categories' })
  @ApiOkResponse({ type: () => BookCategoryListAdminDto, isArray: true })
  getAll() {
    return this.service.getAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get book category by id' })
  @ApiOkResponse({ type: () => BookCategoryDetailAdminDto })
  getOne(@Param('id') id: number) {
    return this.service.getOne(id);
  }

  @Post()
  @ApiOperation({ summary: 'Create book category' })
  @ApiOkResponse({ type: () => BookCategoryDetailAdminDto })
  create(@Body() payload: BookCategoryCreateAdminDto) {
    return this.service.create(payload);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Update book category' })
  @ApiOkResponse({ type: () => BookCategoryDetailAdminDto })
  update(@Param('id') id: number, @Body() payload: BookCategoryUpdateAdminDto) {
    return this.service.update(id, payload);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete book category' })
  delete(@Param('id') id: number) {
    return this.service.delete(id);
  }
}
