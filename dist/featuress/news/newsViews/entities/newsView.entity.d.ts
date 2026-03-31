import { BaseModel } from '../../../../core/base-model';
export declare class NewsView extends BaseModel {
    userId: number;
    newsId: number;
    firstDate: Date;
    lastDate: Date;
    count: number;
}
