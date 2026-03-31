import { Injectable, NotFoundException } from '@nestjs/common';
import { plainToInstance } from 'class-transformer';
import { Author } from '../entities/author.entity';
import { AuthorListAdminDto } from '../dtos/admin/author.list.admin.dto';
import { AuthorDetailAdminDto } from '../dtos/admin/author.detail.admin.dto';
import { AuthorCreateAdminDto } from '../dtos/admin/author.create.admin.dto';
import { AuthorUpdateAdminDto } from '../dtos/admin/author.update.admin.dto';

@Injectable()
export class AuthorAdminService {
  async getAll() {
    const items = await Author.find();
    return plainToInstance(AuthorListAdminDto, items, {
      excludeExtraneousValues: true,
    });
  }
  async getOne(id: number) {
    const item = await Author.findOneBy({ id });
    if (!item) throw new NotFoundException('Author with given id not found');
    return plainToInstance(AuthorDetailAdminDto, item, {
      excludeExtraneousValues: true,
    });
  }
  async create(payload: AuthorCreateAdminDto) {
    const item = Author.create(payload as Author);
    return Author.save(item);
  }
  async update(id: number, payload: AuthorUpdateAdminDto) {
    const item = await Author.findOneBy({ id });
    if (!item) throw new NotFoundException('Author with given id not found');
    Object.assign(
      item,
      Object.fromEntries(
        Object.entries(payload).filter(([, v]) => v !== undefined),
      ),
    );
    return Author.save(item);
  }
  async delete(id: number) {
    const item = await Author.findOneBy({ id });
    if (!item) throw new NotFoundException('Author with given id not found');
    await Author.remove(item);
  }
}
