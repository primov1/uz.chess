import { Injectable, NotFoundException } from '@nestjs/common';
import { plainToInstance } from 'class-transformer';
import { Language } from '../entities/language.entity';
import { LanguageListAdminDto } from '../dtos/admin/language.list.admin.dto';
import { LanguageDetailAdminDto } from '../dtos/admin/language.detail.admin.dto';
import { LanguageCreateAdminDto } from '../dtos/admin/language.create.admin.dto';
import { LanguageUpdateAdminDto } from '../dtos/admin/language.update.admin.dto';

@Injectable()
export class LanguageAdminService {
  async getAll() {
    const items = await Language.find();
    return plainToInstance(LanguageListAdminDto, items, {
      excludeExtraneousValues: true,
    });
  }
  async getOne(id: number) {
    const item = await Language.findOneBy({ id });
    if (!item) throw new NotFoundException('Language with given id not found');
    return plainToInstance(LanguageDetailAdminDto, item, {
      excludeExtraneousValues: true,
    });
  }
  async create(payload: LanguageCreateAdminDto) {
    const item = Language.create(payload as Language);
    return Language.save(item);
  }
  async update(id: number, payload: LanguageUpdateAdminDto) {
    const item = await Language.findOneBy({ id });
    if (!item) throw new NotFoundException('Language with given id not found');
    Object.assign(
      item,
      Object.fromEntries(
        Object.entries(payload).filter(([, v]) => v !== undefined),
      ),
    );
    return Language.save(item);
  }
  async delete(id: number) {
    const item = await Language.findOneBy({ id });
    if (!item) throw new NotFoundException('Language with given id not found');
    await Language.remove(item);
  }
}
