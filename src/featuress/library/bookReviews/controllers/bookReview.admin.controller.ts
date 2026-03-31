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
import { BookReviewAdminService } from '../service/bookReview.admin.service';
import { BookReviewListAdminDto } from '../dtos/admin/bookReview.list.admin.dto';
import { BookReviewDetailAdminDto } from '../dtos/admin/bookReview.detail.admin.dto';
import { BookReviewCreateAdminDto } from '../dtos/admin/bookReview.create.admin.dto';
import { BookReviewUpdateAdminDto } from '../dtos/admin/bookReview.update.admin.dto';

@ApiTags('Admin / Book Reviews')
@ApiBearerAuth('Bearer')
@UseGuards(RolesGuard)
@Roles(UserRole.ADMIN, UserRole.SUPER_ADMIN)
@Controller('admin/book-reviews')
export class BookReviewAdminController {
  constructor(private readonly service: BookReviewAdminService) {}

  @Get()
  @ApiOperation({ summary: 'Get all book reviews' })
  @ApiOkResponse({ type: () => BookReviewListAdminDto, isArray: true })
  getAll() {
    return this.service.getAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get book review by id' })
  @ApiOkResponse({ type: () => BookReviewDetailAdminDto })
  getOne(@Param('id') id: number) {
    return this.service.getOne(id);
  }

  @Post()
  @ApiOperation({ summary: 'Create book review' })
  @ApiOkResponse({ type: () => BookReviewDetailAdminDto })
  create(@Body() payload: BookReviewCreateAdminDto) {
    return this.service.create(payload);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Update book review' })
  @ApiOkResponse({ type: () => BookReviewDetailAdminDto })
  update(@Param('id') id: number, @Body() payload: BookReviewUpdateAdminDto) {
    return this.service.update(id, payload);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete book review' })
  delete(@Param('id') id: number) {
    return this.service.delete(id);
  }
}
