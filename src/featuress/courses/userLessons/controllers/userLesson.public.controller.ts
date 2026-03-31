import { Controller, Get, Param } from '@nestjs/common';
import { ApiOkResponse, ApiOperation, ApiTags } from '@nestjs/swagger';
import { UserLessonPublicService } from '../service/userLesson.public.service';
import { UserLessonListPublicDto } from '../dtos/public/userLesson.list.public.dto';
import { UserLessonDetailPublicDto } from '../dtos/public/userLesson.detail.public.dto';

@ApiTags('Public / User Lessons')
@Controller('public/user-lessons')
export class UserLessonPublicController {
  constructor(private readonly service: UserLessonPublicService) {}
  @Get()
  @ApiOperation({ summary: 'Get all' })
  @ApiOkResponse({ type: () => UserLessonListPublicDto, isArray: true })
  getAll() {
    return this.service.getAll();
  }
  @Get(':id')
  @ApiOperation({ summary: 'Get by id' })
  @ApiOkResponse({ type: () => UserLessonDetailPublicDto })
  getOne(@Param('id') id: number) {
    return this.service.getOne(id);
  }
}
