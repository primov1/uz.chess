import { UserLessonPublicService } from '../service/userLesson.public.service';
import { UserLessonListPublicDto } from '../dtos/public/userLesson.list.public.dto';
import { UserLessonDetailPublicDto } from '../dtos/public/userLesson.detail.public.dto';
export declare class UserLessonPublicController {
    private readonly service;
    constructor(service: UserLessonPublicService);
    getAll(): Promise<UserLessonListPublicDto[]>;
    getOne(id: number): Promise<UserLessonDetailPublicDto>;
}
