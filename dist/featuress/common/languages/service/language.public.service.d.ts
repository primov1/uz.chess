import { LanguageListPublicDto } from '../dtos/public/language.list.public.dto';
import { LanguageDetailPublicDto } from '../dtos/public/language.detail.public.dto';
export declare class LanguagePublicService {
    getAll(): Promise<LanguageListPublicDto[]>;
    getOne(id: number): Promise<LanguageDetailPublicDto>;
}
