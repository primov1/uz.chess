import { Injectable, NotFoundException } from '@nestjs/common';
import { plainToInstance } from 'class-transformer';
import * as bcrypt from 'bcrypt';
import { User } from '../entities/user.entity';
import { UserDetailPublicDto } from '../dtos/public/user.detail.public.dto';
import { UserUpdatePublicDto } from '../dtos/public/user.update.public.dto';

@Injectable()
export class UserPublicService {
  async getMe(id: number) {
    const user = await User.findOneBy({ id });
    if (!user) throw new NotFoundException('User not found');
    return plainToInstance(UserDetailPublicDto, user, {
      excludeExtraneousValues: true,
    });
  }
  async update(id: number, payload: UserUpdatePublicDto) {
    const user = await User.findOneBy({ id });
    if (!user) throw new NotFoundException('User not found');
    if (payload.password) {
      payload.password = await bcrypt.hash(payload.password, 10);
    }
    Object.assign(
      user,
      Object.fromEntries(
        Object.entries(payload).filter(([, v]) => v !== undefined),
      ),
    );
    return User.save(user);
  }
}
