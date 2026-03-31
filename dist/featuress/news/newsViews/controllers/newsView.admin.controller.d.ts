import { NewsViewAdminService } from '../service/newsView.admin.service';
import { NewsViewListAdminDto } from '../dtos/admin/newsView.list.admin.dto';
export declare class NewsViewAdminController {
    private readonly service;
    constructor(service: NewsViewAdminService);
    getAll(): Promise<NewsViewListAdminDto[]>;
}
