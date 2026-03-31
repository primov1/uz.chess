import { CourseLikePublicService } from '../service/courseLike.public.service';
import { CourseLikeListPublicDto } from '../dtos/public/courseLike.list.public.dto';
import { CourseLikeDetailPublicDto } from '../dtos/public/courseLike.detail.public.dto';
import type { JwtPayload } from '../../../auth/interfaces/jwt-payload.interface';
export declare class CourseLikePublicController {
    private readonly service;
    constructor(service: CourseLikePublicService);
    getAll(): Promise<CourseLikeListPublicDto[]>;
    getOne(id: number): Promise<CourseLikeDetailPublicDto>;
    getMyLikes(user: JwtPayload): Promise<CourseLikeListPublicDto[]>;
    toggle(courseId: number, user: JwtPayload): Promise<{
        liked: boolean;
        likesCount: number;
        message: string;
        data?: undefined;
    } | {
        liked: boolean;
        likesCount: number;
        message: string;
        data: CourseLikeDetailPublicDto;
    }>;
}
