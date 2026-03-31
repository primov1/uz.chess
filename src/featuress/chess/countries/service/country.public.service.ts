import { Injectable, NotFoundException } from '@nestjs/common';
import { plainToInstance } from 'class-transformer';
import { Country } from '../entities/country.entity';
import { CountryListPublicDto } from '../dtos/public/country.list.public.dto';
import { CountryDetailPublicDto } from '../dtos/public/country.detail.public.dto';

@Injectable()
export class CountryPublicService {
  async getAll() {
    const items = await Country.find();
    return plainToInstance(CountryListPublicDto, items, {
      excludeExtraneousValues: true,
    });
  }

  async getOne(id: number) {
    const item = await Country.findOneBy({ id });
    if (!item) throw new NotFoundException('Country with given id not found');
    return plainToInstance(CountryDetailPublicDto, item, {
      excludeExtraneousValues: true,
    });
  }
}
