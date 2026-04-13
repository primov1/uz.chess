import { LanguageAdminService } from '../service/language.admin.service';
import { LanguageListAdminDto } from '../dtos/admin/language.list.admin.dto';
import { LanguageDetailAdminDto } from '../dtos/admin/language.detail.admin.dto';
import { LanguageCreateAdminDto } from '../dtos/admin/language.create.admin.dto';
import { LanguageUpdateAdminDto } from '../dtos/admin/language.update.admin.dto';
export declare class LanguageAdminController {
    private readonly service;
    constructor(service: LanguageAdminService);
    getAll(): Promise<LanguageListAdminDto[]>;
    getOne(id: number): Promise<LanguageDetailAdminDto>;
    create(payload: LanguageCreateAdminDto): Promise<import("../entities/language.entity").Language>;
    update(id: number, payload: LanguageUpdateAdminDto): Promise<import("../entities/language.entity").Language>;
    delete(id: number): Promise<void>;
}
