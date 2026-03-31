import { Controller, Get, Param } from '@nestjs/common';
import { ApiOkResponse, ApiOperation, ApiTags } from '@nestjs/swagger';
import { LanguagePublicService } from '../service/language.public.service';
import { LanguageListPublicDto } from '../dtos/public/language.list.public.dto';
import { LanguageDetailPublicDto } from '../dtos/public/language.detail.public.dto';

@ApiTags('Public / Languages')
@Controller('public/languages')
export class LanguagePublicController {
  constructor(private readonly service: LanguagePublicService) {}
  @Get()
  @ApiOperation({ summary: 'Get all' })
  @ApiOkResponse({ type: () => LanguageListPublicDto, isArray: true })
  getAll() {
    return this.service.getAll();
  }
  @Get(':id')
  @ApiOperation({ summary: 'Get by id' })
  @ApiOkResponse({ type: () => LanguageDetailPublicDto })
  getOne(@Param('id') id: number) {
    return this.service.getOne(id);
  }
}
