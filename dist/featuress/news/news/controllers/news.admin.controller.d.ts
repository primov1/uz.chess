import { NewsAdminService } from '../service/news.admin.service';
import { NewsListAdminDto } from '../dtos/admin/news.list.admin.dto';
import { NewsDetailAdminDto } from '../dtos/admin/news.detail.admin.dto';
import { NewsCreateAdminDto } from '../dtos/admin/news.create.admin.dto';
import { NewsUpdateAdminDto } from '../dtos/admin/news.update.admin.dto';
export declare class NewsAdminController {
    private readonly service;
    constructor(service: NewsAdminService);
    getAll(): Promise<NewsListAdminDto[]>;
    getOne(id: number): Promise<NewsDetailAdminDto>;
    create(payload: NewsCreateAdminDto, file?: Express.Multer.File): Promise<import("../entities/news.entity").News>;
    update(id: number, payload: NewsUpdateAdminDto, file?: Express.Multer.File): Promise<import("../entities/news.entity").News>;
    delete(id: number): Promise<void>;
}
