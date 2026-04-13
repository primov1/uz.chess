import { Injectable, NotFoundException } from '@nestjs/common';
import { plainToInstance } from 'class-transformer';
import * as bcrypt from 'bcrypt';
import { User } from '../entities/user.entity';
import { UserListAdminDto } from '../dtos/admin/user.list.admin.dto';
import { UserDetailAdminDto } from '../dtos/admin/user.detail.admin.dto';
import { UserCreateAdminDto } from '../dtos/admin/user.create.admin.dto';
import { UserUpdateAdminDto } from '../dtos/admin/user.update.admin.dto';

@Injectable()
export class UserAdminService {
  async getAll() {
    const users = await User.find();
    return plainToInstance(UserListAdminDto, users, {
      excludeExtraneousValues: true,
    });
  }
  async getOne(id: number) {
    const user = await User.findOneBy({ id });
    if (!user) throw new NotFoundException('User with given id not found');
    return plainToInstance(UserDetailAdminDto, user, {
      excludeExtraneousValues: true,
    });
  }
  async create(payload: UserCreateAdminDto) {
    if (payload.password) {
      payload.password = await bcrypt.hash(payload.password, 10);
    }
    const user = User.create(payload as User);
    return User.save(user);
  }
  async update(id: number, payload: UserUpdateAdminDto) {
    const user = await User.findOneBy({ id });
    if (!user) throw new NotFoundException('User with given id not found');
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
  async delete(id: number) {
    const user = await User.findOneBy({ id });
    if (!user) throw new NotFoundException('User with given id not found');
    await User.remove(user);
  }
}
