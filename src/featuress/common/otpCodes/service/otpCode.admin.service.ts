import { Injectable, NotFoundException } from '@nestjs/common';
import { OtpCode } from '../entities/otpCode.entity';
import { OtpCodeCreateAdminDto } from '../dtos/admin/otpCode.create.admin.dto';

@Injectable()
export class OtpCodeAdminService {
  async getAll() {
    return OtpCode.find();
  }

  async create(payload: OtpCodeCreateAdminDto) {
    // To'g'rilandi: 'as OtpCode' olib tashlandi va 'as any' ishlatildi
    // yoki shunchaki: const item = OtpCode.create({ ...payload });
    const item = OtpCode.create(payload as any);
    return OtpCode.save(item);
  }

  async delete(id: number) {
    const item = await OtpCode.findOneBy({ id });
    if (!item) throw new NotFoundException('OtpCode with given id not found');
    await OtpCode.remove(item);
  }
}
