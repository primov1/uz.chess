import { Controller, Get } from '@nestjs/common';
import { ApiOkResponse, ApiOperation, ApiTags } from '@nestjs/swagger';
import { TermsPublicService } from '../service/terms.public.service';
import { TermsDetailPublicDto } from '../dtos/public/terms.detail.public.dto';

@ApiTags('Public / Terms')
@Controller('public/terms')
export class TermsPublicController {
  constructor(private readonly service: TermsPublicService) {}

  @Get()
  @ApiOperation({ summary: 'Get terms' })
  @ApiOkResponse({ type: () => TermsDetailPublicDto })
  get() {
    return this.service.get();
  }
}
