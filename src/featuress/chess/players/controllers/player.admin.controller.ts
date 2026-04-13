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
import { PlayerAdminService } from '../service/player.admin.service';
import { PlayerListAdminDto } from '../dtos/admin/player.list.admin.dto';
import { PlayerDetailAdminDto } from '../dtos/admin/player.detail.admin.dto';
import { PlayerCreateAdminDto } from '../dtos/admin/player.create.admin.dto';
import { PlayerUpdateAdminDto } from '../dtos/admin/player.update.admin.dto';
import { multerConfig } from '../../../upload/multer.config';

@ApiTags('Admin / Players')
@ApiBearerAuth('Bearer')
@UseGuards(RolesGuard)
@Roles(UserRole.ADMIN, UserRole.SUPER_ADMIN)
@Controller('admin/players')
export class PlayerAdminController {
  constructor(private readonly playerAdminService: PlayerAdminService) {}

  @Get()
  @ApiOperation({ summary: 'Get all players' })
  @ApiOkResponse({ type: () => PlayerListAdminDto, isArray: true })
  getAll() {
    return this.playerAdminService.getAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get player by id' })
  @ApiOkResponse({ type: () => PlayerDetailAdminDto })
  getOne(@Param('id') id: number) {
    return this.playerAdminService.getOne(id);
  }

  @Post()
  @ApiOperation({ summary: 'Create player' })
  @ApiConsumes('multipart/form-data')
  @ApiBody({
    schema: {
      type: 'object',
      properties: {
        countryId: { type: 'number' },
        fullName: { type: 'string' },
        image: { type: 'string', format: 'binary' },
        classic: { type: 'number' },
        rapid: { type: 'number' },
        blitz: { type: 'number' },
      },
      required: ['countryId', 'fullName'],
    },
  })
  @ApiOkResponse({ type: () => PlayerDetailAdminDto })
  @UseInterceptors(FileInterceptor('image', multerConfig))
  create(
    @Body() payload: PlayerCreateAdminDto,
    @UploadedFile() file?: Express.Multer.File,
  ) {
    return this.playerAdminService.create(payload, file);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Update player' })
  @ApiConsumes('multipart/form-data')
  @ApiBody({
    schema: {
      type: 'object',
      properties: {
        countryId: { type: 'number' },
        fullName: { type: 'string' },
        image: { type: 'string', format: 'binary' },
        classic: { type: 'number' },
        rapid: { type: 'number' },
        blitz: { type: 'number' },
      },
    },
  })
  @ApiOkResponse({ type: () => PlayerDetailAdminDto })
  @UseInterceptors(FileInterceptor('image', multerConfig))
  update(
    @Param('id') id: number,
    @Body() payload: PlayerUpdateAdminDto,
    @UploadedFile() file?: Express.Multer.File,
  ) {
    return this.playerAdminService.update(id, payload, file);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete player' })
  delete(@Param('id') id: number) {
    return this.playerAdminService.delete(id);
  }
}
