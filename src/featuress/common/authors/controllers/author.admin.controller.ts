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
import { AuthorAdminService } from '../service/author.admin.service';
import { AuthorListAdminDto } from '../dtos/admin/author.list.admin.dto';
import { AuthorDetailAdminDto } from '../dtos/admin/author.detail.admin.dto';
import { AuthorCreateAdminDto } from '../dtos/admin/author.create.admin.dto';
import { AuthorUpdateAdminDto } from '../dtos/admin/author.update.admin.dto';

@ApiTags('Admin / Authors')
@ApiBearerAuth('Bearer')
@UseGuards(RolesGuard)
@Roles(UserRole.ADMIN, UserRole.SUPER_ADMIN)
@Controller('admin/authors')
export class AuthorAdminController {
  constructor(private readonly service: AuthorAdminService) {}

  @Get()
  @ApiOperation({ summary: 'Get all' })
  @ApiOkResponse({ type: () => AuthorListAdminDto, isArray: true })
  getAll() {
    return this.service.getAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get by id' })
  @ApiOkResponse({ type: () => AuthorDetailAdminDto })
  getOne(@Param('id') id: number) {
    return this.service.getOne(id);
  }

  @Post()
  @ApiOperation({ summary: 'Create' })
  @ApiOkResponse({ type: () => AuthorDetailAdminDto })
  create(@Body() payload: AuthorCreateAdminDto) {
    return this.service.create(payload);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Update' })
  @ApiOkResponse({ type: () => AuthorDetailAdminDto })
  update(@Param('id') id: number, @Body() payload: AuthorUpdateAdminDto) {
    return this.service.update(id, payload);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete' })
  delete(@Param('id') id: number) {
    return this.service.delete(id);
  }
}
