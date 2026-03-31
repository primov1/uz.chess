import { Controller, Get, Param } from '@nestjs/common';
import { ApiOkResponse, ApiOperation, ApiTags } from '@nestjs/swagger';
import { NewsPublicService } from '../service/news.public.service';
import { NewsListPublicDto } from '../dtos/public/news.list.public.dto';
import { NewsDetailPublicDto } from '../dtos/public/news.detail.public.dto';

@ApiTags('Public / News')
@Controller('public/news')
export class NewsPublicController {
  constructor(private readonly service: NewsPublicService) {}

  @Get()
  @ApiOperation({ summary: 'Get all news' })
  @ApiOkResponse({ type: () => NewsListPublicDto, isArray: true })
  getAll() {
    return this.service.getAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get news by id' })
  @ApiOkResponse({ type: () => NewsDetailPublicDto })
  getOne(@Param('id') id: number) {
    return this.service.getOne(id);
  }
}
