import { NewsViewPublicService } from '../service/newsView.public.service';
import { NewsViewCreatePublicDto } from '../dtos/public/newsView.create.public.dto';
export declare class NewsViewPublicController {
    private readonly service;
    constructor(service: NewsViewPublicService);
    create(userId: number, payload: NewsViewCreatePublicDto): Promise<import("../entities/newsView.entity").NewsView>;
}
