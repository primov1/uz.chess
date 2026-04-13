import { Language } from '../entities/language.entity';
import { LanguageListAdminDto } from '../dtos/admin/language.list.admin.dto';
import { LanguageDetailAdminDto } from '../dtos/admin/language.detail.admin.dto';
import { LanguageCreateAdminDto } from '../dtos/admin/language.create.admin.dto';
import { LanguageUpdateAdminDto } from '../dtos/admin/language.update.admin.dto';
export declare class LanguageAdminService {
    getAll(): Promise<LanguageListAdminDto[]>;
    getOne(id: number): Promise<LanguageDetailAdminDto>;
    create(payload: LanguageCreateAdminDto): Promise<Language>;
    update(id: number, payload: LanguageUpdateAdminDto): Promise<Language>;
    delete(id: number): Promise<void>;
}
