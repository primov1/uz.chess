import { Controller, Get, Param } from '@nestjs/common';
import { ApiOkResponse, ApiOperation, ApiTags } from '@nestjs/swagger';
import { PlayerPublicService } from '../service/player.public.service';
import { PlayerListPublicDto } from '../dtos/public/player.list.public.dto';
import { PlayerDetailPublicDto } from '../dtos/public/player.detail.public.dto';

@ApiTags('Public / Players')
@Controller('public/players')
export class PlayerPublicController {
  constructor(private readonly playerPublicService: PlayerPublicService) {}

  @Get()
  @ApiOperation({ summary: 'Get all players' })
  @ApiOkResponse({ type: () => PlayerListPublicDto, isArray: true })
  getAll() {
    return this.playerPublicService.getAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get player by id' })
  @ApiOkResponse({ type: () => PlayerDetailPublicDto })
  getOne(@Param('id') id: number) {
    return this.playerPublicService.getOne(id);
  }
}
