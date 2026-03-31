import { BookLikeAdminService } from '../service/bookLike.admin.service';
import { BookLikeListAdminDto } from '../dtos/admin/bookLike.list.admin.dto';
import { BookLikeDetailAdminDto } from '../dtos/admin/bookLike.detail.admin.dto';
import { BookLikeCreateAdminDto } from '../dtos/admin/bookLike.create.admin.dto';
import { BookLikeUpdateAdminDto } from '../dtos/admin/bookLike.update.admin.dto';
export declare class BookLikeAdminController {
    private readonly service;
    constructor(service: BookLikeAdminService);
    getAll(): Promise<BookLikeListAdminDto[]>;
    getOne(id: number): Promise<BookLikeDetailAdminDto>;
    create(payload: BookLikeCreateAdminDto): Promise<import("../entities/bookLike.entity").BookLike>;
    update(id: number, payload: BookLikeUpdateAdminDto): Promise<import("../entities/bookLike.entity").BookLike>;
    delete(id: number): Promise<void>;
}
