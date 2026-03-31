import { Body, Controller, Param, Post } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { NewsViewPublicService } from '../service/newsView.public.service';
import { NewsViewCreatePublicDto } from '../dtos/public/newsView.create.public.dto';

@ApiTags('Public / News Views')
@Controller('public/news-views')
export class NewsViewPublicController {
  constructor(private readonly service: NewsViewPublicService) {}
  @Post(':userId')
  @ApiOperation({ summary: 'Register news view' })
  create(
    @Param('userId') userId: number,
    @Body() payload: NewsViewCreatePublicDto,
  ) {
    return this.service.create(userId, payload);
  }
}
