import { NewsPublicService } from '../service/news.public.service';
import { NewsListPublicDto } from '../dtos/public/news.list.public.dto';
import { NewsDetailPublicDto } from '../dtos/public/news.detail.public.dto';
export declare class NewsPublicController {
    private readonly service;
    constructor(service: NewsPublicService);
    getAll(): Promise<NewsListPublicDto[]>;
    getOne(id: number): Promise<NewsDetailPublicDto>;
}
