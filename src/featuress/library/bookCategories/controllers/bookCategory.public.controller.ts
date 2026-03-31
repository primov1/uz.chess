import { Controller, Get, Param } from '@nestjs/common';
import { ApiOkResponse, ApiOperation, ApiTags } from '@nestjs/swagger';
import { BookCategoryPublicService } from '../service/bookCategory.public.service';
import { BookCategoryListPublicDto } from '../dtos/public/bookCategory.list.public.dto';
import { BookCategoryDetailPublicDto } from '../dtos/public/bookCategory.detail.public.dto';

@ApiTags('Public / Book Categories')
@Controller('public/book-categories')
export class BookCategoryPublicController {
  constructor(private readonly service: BookCategoryPublicService) {}

  @Get()
  @ApiOperation({ summary: 'Get all book categories' })
  @ApiOkResponse({ type: () => BookCategoryListPublicDto, isArray: true })
  getAll() {
    return this.service.getAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get book category by id' })
  @ApiOkResponse({ type: () => BookCategoryDetailPublicDto })
  getOne(@Param('id') id: number) {
    return this.service.getOne(id);
  }
}
