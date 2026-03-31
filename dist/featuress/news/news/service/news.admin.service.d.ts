import { News } from '../entities/news.entity';
import { NewsListAdminDto } from '../dtos/admin/news.list.admin.dto';
import { NewsDetailAdminDto } from '../dtos/admin/news.detail.admin.dto';
import { NewsCreateAdminDto } from '../dtos/admin/news.create.admin.dto';
import { NewsUpdateAdminDto } from '../dtos/admin/news.update.admin.dto';
export declare class NewsAdminService {
    getAll(): Promise<NewsListAdminDto[]>;
    getOne(id: number): Promise<NewsDetailAdminDto>;
    create(payload: NewsCreateAdminDto): Promise<News>;
    update(id: number, payload: NewsUpdateAdminDto): Promise<News>;
    delete(id: number): Promise<void>;
}
