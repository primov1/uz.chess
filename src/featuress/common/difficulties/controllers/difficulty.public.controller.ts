import { Controller, Get, Param } from '@nestjs/common';
import { ApiOkResponse, ApiOperation, ApiTags } from '@nestjs/swagger';
import { DifficultyPublicService } from '../service/difficulty.public.service';
import { DifficultyListPublicDto } from '../dtos/public/difficulty.list.public.dto';
import { DifficultyDetailPublicDto } from '../dtos/public/difficulty.detail.public.dto';

@ApiTags('Public / Difficulties')
@Controller('public/difficulties')
export class DifficultyPublicController {
  constructor(private readonly service: DifficultyPublicService) {}

  @Get()
  @ApiOperation({ summary: 'Get all difficulties' })
  @ApiOkResponse({ type: () => DifficultyListPublicDto, isArray: true })
  getAll() {
    return this.service.getAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get difficulty by id' })
  @ApiOkResponse({ type: () => DifficultyDetailPublicDto })
  getOne(@Param('id') id: number) {
    return this.service.getOne(id);
  }
}
