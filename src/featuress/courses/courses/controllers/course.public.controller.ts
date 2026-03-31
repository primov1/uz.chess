import { Controller, Get, Param } from '@nestjs/common';
import { ApiOkResponse, ApiOperation, ApiTags } from '@nestjs/swagger';
import { CoursePublicService } from '../service/course.public.service';
import { CourseListPublicDto } from '../dtos/public/course.list.public.dto';
import { CourseDetailPublicDto } from '../dtos/public/course.detail.public.dto';

@ApiTags('Public / Courses')
@Controller('public/courses')
export class CoursePublicController {
  constructor(private readonly service: CoursePublicService) {}
  @Get()
  @ApiOperation({ summary: 'Get all' })
  @ApiOkResponse({ type: () => CourseListPublicDto, isArray: true })
  getAll() {
    return this.service.getAll();
  }
  @Get(':id')
  @ApiOperation({ summary: 'Get by id' })
  @ApiOkResponse({ type: () => CourseDetailPublicDto })
  getOne(@Param('id') id: number) {
    return this.service.getOne(id);
  }
}
