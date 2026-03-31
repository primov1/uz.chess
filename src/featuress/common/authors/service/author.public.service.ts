import { Injectable, NotFoundException } from '@nestjs/common';
import { plainToInstance } from 'class-transformer';
import { Author } from '../entities/author.entity';
import { AuthorListPublicDto } from '../dtos/public/author.list.public.dto';
import { AuthorDetailPublicDto } from '../dtos/public/author.detail.public.dto';

@Injectable()
export class AuthorPublicService {
  async getAll() {
    const items = await Author.find();
    return plainToInstance(AuthorListPublicDto, items, {
      excludeExtraneousValues: true,
    });
  }
  async getOne(id: number) {
    const item = await Author.findOneBy({ id });
    if (!item) throw new NotFoundException('Author with given id not found');
    return plainToInstance(AuthorDetailPublicDto, item, {
      excludeExtraneousValues: true,
    });
  }
}
