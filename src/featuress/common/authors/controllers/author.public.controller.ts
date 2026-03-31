import { Controller, Get, Param } from '@nestjs/common';
import { ApiOkResponse, ApiOperation, ApiTags } from '@nestjs/swagger';
import { AuthorPublicService } from '../service/author.public.service';
import { AuthorListPublicDto } from '../dtos/public/author.list.public.dto';
import { AuthorDetailPublicDto } from '../dtos/public/author.detail.public.dto';

@ApiTags('Public / Authors')
@Controller('public/authors')
export class AuthorPublicController {
  constructor(private readonly service: AuthorPublicService) {}
  @Get()
  @ApiOperation({ summary: 'Get all' })
  @ApiOkResponse({ type: () => AuthorListPublicDto, isArray: true })
  getAll() {
    return this.service.getAll();
  }
  @Get(':id')
  @ApiOperation({ summary: 'Get by id' })
  @ApiOkResponse({ type: () => AuthorDetailPublicDto })
  getOne(@Param('id') id: number) {
    return this.service.getOne(id);
  }
}
