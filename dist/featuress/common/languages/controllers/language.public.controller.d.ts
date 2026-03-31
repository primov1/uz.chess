import { LanguagePublicService } from '../service/language.public.service';
import { LanguageListPublicDto } from '../dtos/public/language.list.public.dto';
import { LanguageDetailPublicDto } from '../dtos/public/language.detail.public.dto';
export declare class LanguagePublicController {
    private readonly service;
    constructor(service: LanguagePublicService);
    getAll(): Promise<LanguageListPublicDto[]>;
    getOne(id: number): Promise<LanguageDetailPublicDto>;
}
