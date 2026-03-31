import { Injectable, NotFoundException } from '@nestjs/common';
import { Terms } from '../entities/terms.entity';
import { TermsUpdateAdminDto } from '../dtos/admin/terms.update.admin.dto';

@Injectable()
export class TermsAdminService {
  async get() {
    const terms = await Terms.findOneBy({ id: 1 });
    if (!terms) throw new NotFoundException('Terms not found');
    return terms;
  }

  async update(payload: TermsUpdateAdminDto) {
    let terms = await Terms.findOneBy({ id: 1 });
    if (!terms) {
      terms = Terms.create({ id: 1, ...payload } as Terms);
    } else {
      terms.content = payload.content;
    }
    return Terms.save(terms);
  }
}
