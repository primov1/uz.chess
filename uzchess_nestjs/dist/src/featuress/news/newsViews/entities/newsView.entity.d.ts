import { BaseModel } from '../../../../core/base-model';
import { User } from '../../../users/entities/user.entity';
import { News } from '../../news/entities/news.entity';
export declare class NewsView extends BaseModel {
    userId: number;
    newsId: number;
    firstDate: Date;
    lastDate: Date;
    count: number;
    user: User;
    news: News;
}
