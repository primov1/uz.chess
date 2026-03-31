import { Injectable, NotFoundException } from '@nestjs/common';
import { plainToInstance } from 'class-transformer';
import { Terms } from '../entities/terms.entity';
import { TermsDetailPublicDto } from '../dtos/public/terms.detail.public.dto';

@Injectable()
export class TermsPublicService {
  async get(): Promise<TermsDetailPublicDto> {
    const terms = await Terms.findOneBy({ id: 1 });
    if (!terms) throw new NotFoundException('Terms not found');
    return plainToInstance(TermsDetailPublicDto, terms, {
      excludeExtraneousValues: true,
    });
  }
}
