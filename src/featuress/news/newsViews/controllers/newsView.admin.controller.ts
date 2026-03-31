import { Controller, Get, UseGuards } from '@nestjs/common';
import {
  ApiBearerAuth,
  ApiOkResponse,
  ApiOperation,
  ApiTags,
} from '@nestjs/swagger';
import { Roles } from '../../../auth/decorators/roles.decorator';
import { RolesGuard } from '../../../auth/guards/roles.guard';
import { UserRole } from '../../../users/entities/user.entity';
import { NewsViewAdminService } from '../service/newsView.admin.service';
import { NewsViewListAdminDto } from '../dtos/admin/newsView.list.admin.dto';

@ApiTags('Admin / News Views')
@ApiBearerAuth('Bearer')
@UseGuards(RolesGuard)
@Roles(UserRole.ADMIN, UserRole.SUPER_ADMIN)
@Controller('admin/news-views')
export class NewsViewAdminController {
  constructor(private readonly service: NewsViewAdminService) {}
  @Get()
  @ApiOperation({ summary: 'Get all news views' })
  @ApiOkResponse({ type: () => NewsViewListAdminDto, isArray: true })
  getAll() {
    return this.service.getAll();
  }
}
