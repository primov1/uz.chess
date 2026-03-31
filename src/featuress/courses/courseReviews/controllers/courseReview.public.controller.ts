import { Controller, Get, Param } from '@nestjs/common';
import { ApiOkResponse, ApiOperation, ApiTags } from '@nestjs/swagger';
import { CourseReviewPublicService } from '../service/courseReview.public.service';
import { CourseReviewListPublicDto } from '../dtos/public/courseReview.list.public.dto';
import { CourseReviewDetailPublicDto } from '../dtos/public/courseReview.detail.public.dto';

@ApiTags('Public / Course Reviews')
@Controller('public/course-reviews')
export class CourseReviewPublicController {
  constructor(private readonly service: CourseReviewPublicService) {}
  @Get()
  @ApiOperation({ summary: 'Get all' })
  @ApiOkResponse({ type: () => CourseReviewListPublicDto, isArray: true })
  getAll() {
    return this.service.getAll();
  }
  @Get(':id')
  @ApiOperation({ summary: 'Get by id' })
  @ApiOkResponse({ type: () => CourseReviewDetailPublicDto })
  getOne(@Param('id') id: number) {
    return this.service.getOne(id);
  }
}
