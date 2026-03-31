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
import { MatchAdminService } from '../service/match.admin.service';
import { MatchListAdminDto } from '../dtos/admin/match.list.admin.dto';
import { MatchDetailAdminDto } from '../dtos/admin/match.detail.admin.dto';
import { MatchCreateAdminDto } from '../dtos/admin/match.create.admin.dto';
import { MatchUpdateAdminDto } from '../dtos/admin/match.update.admin.dto';

@ApiTags('Admin / Matches')
@ApiBearerAuth('Bearer')
@UseGuards(RolesGuard)
@Roles(UserRole.ADMIN, UserRole.SUPER_ADMIN)
@Controller('admin/matches')
export class MatchAdminController {
  constructor(private readonly matchAdminService: MatchAdminService) {}

  @Get()
  @ApiOperation({ summary: 'Get all matches' })
  @ApiOkResponse({ type: () => MatchListAdminDto, isArray: true })
  getAll() {
    return this.matchAdminService.getAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get match by id' })
  @ApiOkResponse({ type: () => MatchDetailAdminDto })
  getOne(@Param('id') id: number) {
    return this.matchAdminService.getOne(id);
  }

  @Post()
  @ApiOperation({ summary: 'Create match' })
  @ApiOkResponse({ type: () => MatchDetailAdminDto })
  create(@Body() payload: MatchCreateAdminDto) {
    return this.matchAdminService.create(payload);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Update match' })
  @ApiOkResponse({ type: () => MatchDetailAdminDto })
  update(@Param('id') id: number, @Body() payload: MatchUpdateAdminDto) {
    return this.matchAdminService.update(id, payload);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete match' })
  delete(@Param('id') id: number) {
    return this.matchAdminService.delete(id);
  }
}
