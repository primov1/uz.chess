import { CountryPublicService } from '../service/country.public.service';
import { CountryListPublicDto } from '../dtos/public/country.list.public.dto';
import { CountryDetailPublicDto } from '../dtos/public/country.detail.public.dto';
export declare class CountryPublicController {
    private readonly service;
    constructor(service: CountryPublicService);
    getAll(): Promise<CountryListPublicDto[]>;
    getOne(id: number): Promise<CountryDetailPublicDto>;
}
