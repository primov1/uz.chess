import { Controller, Get, Param } from '@nestjs/common';
import { ApiOkResponse, ApiOperation, ApiTags } from '@nestjs/swagger';
import { ReportCategoryPublicService } from '../service/reportCategory.public.service';
import { ReportCategoryListPublicDto } from '../dtos/public/reportCategory.list.public.dto';
import { ReportCategoryDetailPublicDto } from '../dtos/public/reportCategory.detail.public.dto';

@ApiTags('Public / Report Categories')
@Controller('public/report-categories')
export class ReportCategoryPublicController {
  constructor(private readonly service: ReportCategoryPublicService) {}
  @Get()
  @ApiOperation({ summary: 'Get all' })
  @ApiOkResponse({ type: () => ReportCategoryListPublicDto, isArray: true })
  getAll() {
    return this.service.getAll();
  }
  @Get(':id')
  @ApiOperation({ summary: 'Get by id' })
  @ApiOkResponse({ type: () => ReportCategoryDetailPublicDto })
  getOne(@Param('id') id: number) {
    return this.service.getOne(id);
  }
}
