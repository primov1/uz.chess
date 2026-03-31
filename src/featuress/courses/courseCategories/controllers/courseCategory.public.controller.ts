import { Controller, Get, Param } from '@nestjs/common';
import { ApiOkResponse, ApiOperation, ApiTags } from '@nestjs/swagger';
import { CourseCategoryPublicService } from '../service/courseCategory.public.service';
import { CourseCategoryListPublicDto } from '../dtos/public/courseCategory.list.public.dto';
import { CourseCategoryDetailPublicDto } from '../dtos/public/courseCategory.detail.public.dto';

@ApiTags('Public / Course Categories')
@Controller('public/course-categories')
export class CourseCategoryPublicController {
  constructor(private readonly service: CourseCategoryPublicService) {}
  @Get()
  @ApiOperation({ summary: 'Get all' })
  @ApiOkResponse({ type: () => CourseCategoryListPublicDto, isArray: true })
  getAll() {
    return this.service.getAll();
  }
  @Get(':id')
  @ApiOperation({ summary: 'Get by id' })
  @ApiOkResponse({ type: () => CourseCategoryDetailPublicDto })
  getOne(@Param('id') id: number) {
    return this.service.getOne(id);
  }
}
