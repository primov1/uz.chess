import { Controller, Get, Param } from '@nestjs/common';
import { ApiOkResponse, ApiOperation, ApiTags } from '@nestjs/swagger';
import { CountryPublicService } from '../service/country.public.service';
import { CountryListPublicDto } from '../dtos/public/country.list.public.dto';
import { CountryDetailPublicDto } from '../dtos/public/country.detail.public.dto';

@ApiTags('Public / Countries')
@Controller('public/countries')
export class CountryPublicController {
  constructor(private readonly service: CountryPublicService) {}

  @Get()
  @ApiOperation({ summary: 'Get all countries' })
  @ApiOkResponse({ type: () => CountryListPublicDto, isArray: true })
  getAll() {
    return this.service.getAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get country by id' })
  @ApiOkResponse({ type: () => CountryDetailPublicDto })
  getOne(@Param('id') id: number) {
    return this.service.getOne(id);
  }
}
