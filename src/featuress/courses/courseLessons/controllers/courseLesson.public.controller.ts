import { Controller, Get, Param } from '@nestjs/common';
import { ApiOkResponse, ApiOperation, ApiTags } from '@nestjs/swagger';
import { CourseLessonPublicService } from '../service/courseLesson.public.service';
import { CourseLessonListPublicDto } from '../dtos/public/courseLesson.list.public.dto';
import { CourseLessonDetailPublicDto } from '../dtos/public/courseLesson.detail.public.dto';

@ApiTags('Public / Course Lessons')
@Controller('public/course-lessons')
export class CourseLessonPublicController {
  constructor(private readonly service: CourseLessonPublicService) {}
  @Get()
  @ApiOperation({ summary: 'Get all' })
  @ApiOkResponse({ type: () => CourseLessonListPublicDto, isArray: true })
  getAll() {
    return this.service.getAll();
  }
  @Get(':id')
  @ApiOperation({ summary: 'Get by id' })
  @ApiOkResponse({ type: () => CourseLessonDetailPublicDto })
  getOne(@Param('id') id: number) {
    return this.service.getOne(id);
  }
}
