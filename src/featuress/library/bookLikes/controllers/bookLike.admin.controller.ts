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
import { BookLikeAdminService } from '../service/bookLike.admin.service';
import { BookLikeListAdminDto } from '../dtos/admin/bookLike.list.admin.dto';
import { BookLikeDetailAdminDto } from '../dtos/admin/bookLike.detail.admin.dto';
import { BookLikeCreateAdminDto } from '../dtos/admin/bookLike.create.admin.dto';
import { BookLikeUpdateAdminDto } from '../dtos/admin/bookLike.update.admin.dto';

@ApiTags('Admin / Book Likes')
@ApiBearerAuth('Bearer')
@UseGuards(RolesGuard)
@Roles(UserRole.ADMIN, UserRole.SUPER_ADMIN)
@Controller('admin/book-likes')
export class BookLikeAdminController {
  constructor(private readonly service: BookLikeAdminService) {}

  @Get()
  @ApiOperation({ summary: 'Get all book likes' })
  @ApiOkResponse({ type: () => BookLikeListAdminDto, isArray: true })
  getAll() {
    return this.service.getAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get book like by id' })
  @ApiOkResponse({ type: () => BookLikeDetailAdminDto })
  getOne(@Param('id') id: number) {
    return this.service.getOne(id);
  }

  @Post()
  @ApiOperation({ summary: 'Create book like' })
  @ApiOkResponse({ type: () => BookLikeDetailAdminDto })
  create(@Body() payload: BookLikeCreateAdminDto) {
    return this.service.create(payload);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Update book like' })
  @ApiOkResponse({ type: () => BookLikeDetailAdminDto })
  update(@Param('id') id: number, @Body() payload: BookLikeUpdateAdminDto) {
    return this.service.update(id, payload);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete book like' })
  delete(@Param('id') id: number) {
    return this.service.delete(id);
  }
}
