import { CourseLikeListPublicDto } from '../dtos/public/courseLike.list.public.dto';
import { CourseLikeDetailPublicDto } from '../dtos/public/courseLike.detail.public.dto';
export declare class CourseLikePublicService {
    getAll(): Promise<CourseLikeListPublicDto[]>;
    getOne(id: number): Promise<CourseLikeDetailPublicDto>;
    toggle(courseId: number, userId: number): Promise<{
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
    getMyLikes(userId: number): Promise<CourseLikeListPublicDto[]>;
}
