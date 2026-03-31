import { Body, Controller, Get, Param, Post, UseGuards } from '@nestjs/common';
import { ApiBearerAuth, ApiOkResponse, ApiOperation, ApiTags } from '@nestjs/swagger';
import { JwtAuthGuard } from '../../../auth/guards/jwt-auth.guard';
import { CurrentUser } from '../../../auth/decorators/current-user.decorator';
import { User } from '../../../users/entities/user.entity';
import { ReportPublicService } from '../service/report.public.service';
import { ReportListPublicDto } from '../dtos/public/report.list.public.dto';
import { ReportDetailPublicDto } from '../dtos/public/report.detail.public.dto';
import { ReportCreatePublicDto } from '../dtos/public/report.create.public.dto';

@ApiTags('Public / Reports')
@Controller('public/reports')
export class ReportPublicController {
  constructor(private readonly service: ReportPublicService) {}

  @Get()
  @ApiOperation({ summary: 'Get all' })
  @ApiOkResponse({ type: () => ReportListPublicDto, isArray: true })
  getAll() {
    return this.service.getAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get by id' })
  @ApiOkResponse({ type: () => ReportDetailPublicDto })
  getOne(@Param('id') id: number) {
    return this.service.getOne(id);
  }

  @Post()
  @ApiBearerAuth('Bearer')
  @UseGuards(JwtAuthGuard)
  @ApiOperation({ summary: 'Submit a report (auth required)' })
  @ApiOkResponse({ type: () => ReportDetailPublicDto })
  create(@Body() payload: ReportCreatePublicDto, @CurrentUser() user: User) {
    return this.service.create(payload, user.id);
  }
}

