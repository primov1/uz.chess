import { Controller, Get, Param } from '@nestjs/common';
import { ApiOkResponse, ApiOperation, ApiTags } from '@nestjs/swagger';
import { PurchasedCoursePublicService } from '../service/purchasedCourse.public.service';
import { PurchasedCourseListPublicDto } from '../dtos/public/purchasedCourse.list.public.dto';
import { PurchasedCourseDetailPublicDto } from '../dtos/public/purchasedCourse.detail.public.dto';

@ApiTags('Public / Purchased Courses')
@Controller('public/purchased-courses')
export class PurchasedCoursePublicController {
  constructor(private readonly service: PurchasedCoursePublicService) {}
  @Get()
  @ApiOperation({ summary: 'Get all' })
  @ApiOkResponse({ type: () => PurchasedCourseListPublicDto, isArray: true })
  getAll() {
    return this.service.getAll();
  }
  @Get(':id')
  @ApiOperation({ summary: 'Get by id' })
  @ApiOkResponse({ type: () => PurchasedCourseDetailPublicDto })
  getOne(@Param('id') id: number) {
    return this.service.getOne(id);
  }
}
