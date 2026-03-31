import { NewsView } from '../entities/newsView.entity';
import { NewsViewCreatePublicDto } from '../dtos/public/newsView.create.public.dto';
export declare class NewsViewPublicService {
    create(userId: number, payload: NewsViewCreatePublicDto): Promise<NewsView>;
}
