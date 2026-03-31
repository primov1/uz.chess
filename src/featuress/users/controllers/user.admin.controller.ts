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
import { Roles } from '../../auth/decorators/roles.decorator';
import { RolesGuard } from '../../auth/guards/roles.guard';
import { UserRole } from '../entities/user.entity';
import { UserAdminService } from '../service/user.admin.service';
import { UserListAdminDto } from '../dtos/admin/user.list.admin.dto';
import { UserDetailAdminDto } from '../dtos/admin/user.detail.admin.dto';
import { UserCreateAdminDto } from '../dtos/admin/user.create.admin.dto';
import { UserUpdateAdminDto } from '../dtos/admin/user.update.admin.dto';
import { multerConfig } from '../../upload/multer.config';

@ApiTags('Admin / Users')
@ApiBearerAuth('Bearer')
@UseGuards(RolesGuard)
@Roles(UserRole.ADMIN, UserRole.SUPER_ADMIN)
@Controller('admin/users')
export class UserAdminController {
  constructor(private readonly service: UserAdminService) {}

  @Get()
  @ApiOperation({ summary: 'Get all users' })
  @ApiOkResponse({ type: () => UserListAdminDto, isArray: true })
  getAll() {
    return this.service.getAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get user by id' })
  @ApiOkResponse({ type: () => UserDetailAdminDto })
  getOne(@Param('id') id: number) {
    return this.service.getOne(id);
  }

  @Post()
  @ApiOperation({ summary: 'Create user (profileImage upload optional)' })
  @ApiConsumes('multipart/form-data')
  @ApiBody({
    schema: {
      type: 'object',
      required: ['fullName', 'login', 'loginType'],
      properties: {
        role: { type: 'string', enum: ['user', 'admin', 'superAdmin'] },
        fullName: { type: 'string', maxLength: 64 },
        profileImage: {
          type: 'string',
          format: 'binary',
          description: 'Profile photo (optional)',
        },
        login: { type: 'string', maxLength: 64 },
        loginType: { type: 'string', enum: ['email', 'number'] },
        password: { type: 'string', maxLength: 128 },
        birthDate: { type: 'string', description: 'ISO date' },
      },
    },
  })
  @ApiOkResponse({ type: () => UserDetailAdminDto })
  @UseInterceptors(FileInterceptor('profileImage', multerConfig))
  create(
    @Body() payload: UserCreateAdminDto,
    @UploadedFile() file?: Express.Multer.File,
  ) {
    if (file) payload.profileImage = `/uploads/${file.filename}`;
    return this.service.create(payload);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Update user (profileImage upload optional)' })
  @ApiConsumes('multipart/form-data')
  @ApiBody({
    schema: {
      type: 'object',
      properties: {
        role: { type: 'string', enum: ['user', 'admin', 'superAdmin'] },
        fullName: { type: 'string', maxLength: 64 },
        profileImage: {
          type: 'string',
          format: 'binary',
          description: 'Profile photo (optional)',
        },
        password: { type: 'string', maxLength: 128 },
        birthDate: { type: 'string', description: 'ISO date' },
        isVerified: { type: 'boolean' },
        isActive: { type: 'boolean' },
      },
    },
  })
  @ApiOkResponse({ type: () => UserDetailAdminDto })
  @UseInterceptors(FileInterceptor('profileImage', multerConfig))
  update(
    @Param('id') id: number,
    @Body() payload: UserUpdateAdminDto,
    @UploadedFile() file?: Express.Multer.File,
  ) {
    if (file) payload.profileImage = `/uploads/${file.filename}`;
    return this.service.update(id, payload);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete user' })
  delete(@Param('id') id: number) {
    return this.service.delete(id);
  }
}
