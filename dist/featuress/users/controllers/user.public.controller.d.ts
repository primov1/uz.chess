import { UserPublicService } from '../service/user.public.service';
import { UserDetailPublicDto } from '../dtos/public/user.detail.public.dto';
import { UserUpdatePublicDto } from '../dtos/public/user.update.public.dto';
export declare class UserPublicController {
    private readonly service;
    constructor(service: UserPublicService);
    getMe(id: number): Promise<UserDetailPublicDto>;
    update(id: number, payload: UserUpdatePublicDto, file?: Express.Multer.File): Promise<import("../entities/user.entity").User>;
}
