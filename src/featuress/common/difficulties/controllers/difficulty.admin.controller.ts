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
  ApiConsumes,
  ApiOkResponse,
  ApiOperation,
  ApiTags,
} from '@nestjs/swagger';
import { Roles } from '../../../auth/decorators/roles.decorator';
import { RolesGuard } from '../../../auth/guards/roles.guard';
import { UserRole } from '../../../users/entities/user.entity';
import { DifficultyAdminService } from '../service/difficulty.admin.service';
import { DifficultyListAdminDto } from '../dtos/admin/difficulty.list.admin.dto';
import { DifficultyDetailAdminDto } from '../dtos/admin/difficulty.detail.admin.dto';
import { DifficultyCreateAdminDto } from '../dtos/admin/difficulty.create.admin.dto';
import { DifficultyUpdateAdminDto } from '../dtos/admin/difficulty.update.admin.dto';
import { multerConfig } from '../../../upload/multer.config';

@ApiTags('Admin / Difficulties')
@ApiBearerAuth('Bearer')
@UseGuards(RolesGuard)
@Roles(UserRole.ADMIN, UserRole.SUPER_ADMIN)
@Controller('admin/difficulties')
export class DifficultyAdminController {
  constructor(private readonly service: DifficultyAdminService) {}

  @Get()
  @ApiOperation({ summary: 'Get all difficulties' })
  @ApiOkResponse({ type: () => DifficultyListAdminDto, isArray: true })
  getAll() {
    return this.service.getAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get difficulty by id' })
  @ApiOkResponse({ type: () => DifficultyDetailAdminDto })
  getOne(@Param('id') id: number) {
    return this.service.getOne(id);
  }

  @Post()
  @ApiOperation({ summary: 'Create difficulty (icon upload optional)' })
  @ApiConsumes('multipart/form-data')
  @ApiOkResponse({ type: () => DifficultyDetailAdminDto })
  @UseInterceptors(FileInterceptor('icon', multerConfig))
  create(
    @Body() payload: DifficultyCreateAdminDto,
    @UploadedFile() file?: Express.Multer.File,
  ) {
    if (file) payload.icon = `/uploads/${file.filename}`;
    return this.service.create(payload);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Update difficulty (icon upload optional)' })
  @ApiConsumes('multipart/form-data')
  @ApiOkResponse({ type: () => DifficultyDetailAdminDto })
  @UseInterceptors(FileInterceptor('icon', multerConfig))
  update(
    @Param('id') id: number,
    @Body() payload: DifficultyUpdateAdminDto,
    @UploadedFile() file?: Express.Multer.File,
  ) {
    if (file) payload.icon = `/uploads/${file.filename}`;
    return this.service.update(id, payload);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete difficulty' })
  delete(@Param('id') id: number) {
    return this.service.delete(id);
  }
}
