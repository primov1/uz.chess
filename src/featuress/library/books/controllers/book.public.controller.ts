import { Controller, Get, Param } from '@nestjs/common';
import { ApiOkResponse, ApiOperation, ApiTags } from '@nestjs/swagger';
import { BookPublicService } from '../service/book.public.service';
import { BookListPublicDto } from '../dtos/public/book.list.public.dto';
import { BookDetailPublicDto } from '../dtos/public/book.detail.public.dto';

@ApiTags('Public / Books')
@Controller('public/books')
export class BookPublicController {
  constructor(private readonly bookPublicService: BookPublicService) {}

  @Get()
  @ApiOperation({ summary: 'Get all books' })
  @ApiOkResponse({ type: () => BookListPublicDto, isArray: true })
  getAll() {
    return this.bookPublicService.getAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get book by id' })
  @ApiOkResponse({ type: () => BookDetailPublicDto })
  getOne(@Param('id') id: number) {
    return this.bookPublicService.getOne(id);
  }
}
