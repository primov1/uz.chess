import { NewsListPublicDto } from '../dtos/public/news.list.public.dto';
import { NewsDetailPublicDto } from '../dtos/public/news.detail.public.dto';
export declare class NewsPublicService {
    getAll(): Promise<NewsListPublicDto[]>;
    getOne(id: number): Promise<NewsDetailPublicDto>;
}
