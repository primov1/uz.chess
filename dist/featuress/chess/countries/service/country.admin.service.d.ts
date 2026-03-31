import { Country } from '../entities/country.entity';
import { CountryListAdminDto } from '../dtos/admin/country.list.admin.dto';
import { CountryDetailAdminDto } from '../dtos/admin/country.detail.admin.dto';
import { CountryCreateAdminDto } from '../dtos/admin/country.create.admin.dto';
import { CountryUpdateAdminDto } from '../dtos/admin/country.update.admin.dto';
export declare class CountryAdminService {
    getAll(): Promise<CountryListAdminDto[]>;
    getOne(id: number): Promise<CountryDetailAdminDto>;
    create(payload: CountryCreateAdminDto): Promise<Country>;
    update(id: number, payload: CountryUpdateAdminDto): Promise<Country>;
    delete(id: number): Promise<void>;
}
