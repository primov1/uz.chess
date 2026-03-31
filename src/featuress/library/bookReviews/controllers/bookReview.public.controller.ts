import { Controller, Get, Param } from '@nestjs/common';
import { ApiOkResponse, ApiOperation, ApiTags } from '@nestjs/swagger';
import { BookReviewPublicService } from '../service/bookReview.public.service';
import { BookReviewListPublicDto } from '../dtos/public/bookReview.list.public.dto';
import { BookReviewDetailPublicDto } from '../dtos/public/bookReview.detail.public.dto';

@ApiTags('Public / Book Reviews')
@Controller('public/book-reviews')
export class BookReviewPublicController {
  constructor(private readonly service: BookReviewPublicService) {}

  @Get()
  @ApiOperation({ summary: 'Get all book reviews' })
  @ApiOkResponse({ type: () => BookReviewListPublicDto, isArray: true })
  getAll() {
    return this.service.getAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get book review by id' })
  @ApiOkResponse({ type: () => BookReviewDetailPublicDto })
  getOne(@Param('id') id: number) {
    return this.service.getOne(id);
  }
}
