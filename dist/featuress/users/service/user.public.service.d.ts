import { User } from '../entities/user.entity';
import { UserDetailPublicDto } from '../dtos/public/user.detail.public.dto';
import { UserUpdatePublicDto } from '../dtos/public/user.update.public.dto';
export declare class UserPublicService {
    getMe(id: number): Promise<UserDetailPublicDto>;
    update(id: number, payload: UserUpdatePublicDto): Promise<User>;
}
