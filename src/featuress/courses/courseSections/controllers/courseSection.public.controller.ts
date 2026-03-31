import { Controller, Get, Param } from '@nestjs/common';
import { ApiOkResponse, ApiOperation, ApiTags } from '@nestjs/swagger';
import { CourseSectionPublicService } from '../service/courseSection.public.service';
import { CourseSectionListPublicDto } from '../dtos/public/courseSection.list.public.dto';
import { CourseSectionDetailPublicDto } from '../dtos/public/courseSection.detail.public.dto';

@ApiTags('Public / Course Sections')
@Controller('public/course-sections')
export class CourseSectionPublicController {
  constructor(private readonly service: CourseSectionPublicService) {}
  @Get()
  @ApiOperation({ summary: 'Get all' })
  @ApiOkResponse({ type: () => CourseSectionListPublicDto, isArray: true })
  getAll() {
    return this.service.getAll();
  }
  @Get(':id')
  @ApiOperation({ summary: 'Get by id' })
  @ApiOkResponse({ type: () => CourseSectionDetailPublicDto })
  getOne(@Param('id') id: number) {
    return this.service.getOne(id);
  }
}
