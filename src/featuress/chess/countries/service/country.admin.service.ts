import { Injectable, NotFoundException } from '@nestjs/common';
import { plainToInstance } from 'class-transformer';
import { Country } from '../entities/country.entity';
import { CountryListAdminDto } from '../dtos/admin/country.list.admin.dto';
import { CountryDetailAdminDto } from '../dtos/admin/country.detail.admin.dto';
import { CountryCreateAdminDto } from '../dtos/admin/country.create.admin.dto';
import { CountryUpdateAdminDto } from '../dtos/admin/country.update.admin.dto';

@Injectable()
export class CountryAdminService {
  async getAll() {
    const items = await Country.find();
    return plainToInstance(CountryListAdminDto, items, {
      excludeExtraneousValues: true,
    });
  }

  async getOne(id: number) {
    const item = await Country.findOneBy({ id });
    if (!item) throw new NotFoundException('Country with given id not found');
    return plainToInstance(CountryDetailAdminDto, item, {
      excludeExtraneousValues: true,
    });
  }

  async create(payload: CountryCreateAdminDto) {
    const item = Country.create(payload as Country);
    return Country.save(item);
  }

  async update(id: number, payload: CountryUpdateAdminDto) {
    const item = await Country.findOneBy({ id });
    if (!item) throw new NotFoundException('Country with given id not found');
    Object.assign(
      item,
      Object.fromEntries(
        Object.entries(payload).filter(([, v]) => v !== undefined),
      ),
    );
    return Country.save(item);
  }

  async delete(id: number) {
    const item = await Country.findOneBy({ id });
    if (!item) throw new NotFoundException('Country with given id not found');
    await Country.remove(item);
  }
}
