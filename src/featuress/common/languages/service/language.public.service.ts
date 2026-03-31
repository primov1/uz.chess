import { Injectable, NotFoundException } from '@nestjs/common';
import { plainToInstance } from 'class-transformer';
import { Language } from '../entities/language.entity';
import { LanguageListPublicDto } from '../dtos/public/language.list.public.dto';
import { LanguageDetailPublicDto } from '../dtos/public/language.detail.public.dto';

@Injectable()
export class LanguagePublicService {
  async getAll() {
    const items = await Language.find();
    return plainToInstance(LanguageListPublicDto, items, {
      excludeExtraneousValues: true,
    });
  }
  async getOne(id: number) {
    const item = await Language.findOneBy({ id });
    if (!item) throw new NotFoundException('Language with given id not found');
    return plainToInstance(LanguageDetailPublicDto, item, {
      excludeExtraneousValues: true,
    });
  }
}
