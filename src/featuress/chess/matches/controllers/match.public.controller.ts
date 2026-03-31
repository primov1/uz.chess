import { Controller, Get, Param } from '@nestjs/common';
import { ApiOkResponse, ApiOperation, ApiTags } from '@nestjs/swagger';
import { MatchPublicService } from '../service/match.public.service';
import { MatchListPublicDto } from '../dtos/public/match.list.public.dto';
import { MatchDetailPublicDto } from '../dtos/public/match.detail.public.dto';

@ApiTags('Public / Matches')
@Controller('public/matches')
export class MatchPublicController {
  constructor(private readonly matchPublicService: MatchPublicService) {}

  @Get()
  @ApiOperation({ summary: 'Get all matches' })
  @ApiOkResponse({ type: () => MatchListPublicDto, isArray: true })
  getAll() {
    return this.matchPublicService.getAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get match by id' })
  @ApiOkResponse({ type: () => MatchDetailPublicDto })
  getOne(@Param('id') id: number) {
    return this.matchPublicService.getOne(id);
  }
}
