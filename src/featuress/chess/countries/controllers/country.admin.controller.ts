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
import { CountryAdminService } from '../service/country.admin.service';
import { CountryListAdminDto } from '../dtos/admin/country.list.admin.dto';
import { CountryDetailAdminDto } from '../dtos/admin/country.detail.admin.dto';
import { CountryCreateAdminDto } from '../dtos/admin/country.create.admin.dto';
import { CountryUpdateAdminDto } from '../dtos/admin/country.update.admin.dto';
import { multerConfig } from '../../../upload/multer.config';

@ApiTags('Admin / Countries')
@ApiBearerAuth('Bearer')
@UseGuards(RolesGuard)
@Roles(UserRole.ADMIN, UserRole.SUPER_ADMIN)
@Controller('admin/countries')
export class CountryAdminController {
  constructor(private readonly service: CountryAdminService) {}

  @Get()
  @ApiOperation({ summary: 'Get all countries' })
  @ApiOkResponse({ type: () => CountryListAdminDto, isArray: true })
  getAll() {
    return this.service.getAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get country by id' })
  @ApiOkResponse({ type: () => CountryDetailAdminDto })
  getOne(@Param('id') id: number) {
    return this.service.getOne(id);
  }

  @Post()
  @ApiOperation({ summary: 'Create country (flag upload optional)' })
  @ApiConsumes('multipart/form-data')
  @ApiBody({
    schema: {
      type: 'object',
      required: ['title'],
      properties: {
        title: { type: 'string', maxLength: 64 },
        flag: {
          type: 'string',
          format: 'binary',
          description: 'Flag image file (optional)',
        },
      },
    },
  })
  @ApiOkResponse({ type: () => CountryDetailAdminDto })
  @UseInterceptors(FileInterceptor('flag', multerConfig))
  create(
    @Body() payload: CountryCreateAdminDto,
    @UploadedFile() file?: Express.Multer.File,
  ) {
    if (file) payload.flag = `/uploads/${file.filename}`;
    return this.service.create(payload);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Update country (flag upload optional)' })
  @ApiConsumes('multipart/form-data')
  @ApiBody({
    schema: {
      type: 'object',
      properties: {
        title: { type: 'string', maxLength: 64 },
        flag: {
          type: 'string',
          format: 'binary',
          description: 'New flag image file (optional)',
        },
      },
    },
  })
  @ApiOkResponse({ type: () => CountryDetailAdminDto })
  @UseInterceptors(FileInterceptor('flag', multerConfig))
  update(
    @Param('id') id: number,
    @Body() payload: CountryUpdateAdminDto,
    @UploadedFile() file?: Express.Multer.File,
  ) {
    if (file) payload.flag = `/uploads/${file.filename}`;
    return this.service.update(id, payload);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete country' })
  delete(@Param('id') id: number) {
    return this.service.delete(id);
  }
}
