import { CountryAdminService } from '../service/country.admin.service';
import { CountryListAdminDto } from '../dtos/admin/country.list.admin.dto';
import { CountryDetailAdminDto } from '../dtos/admin/country.detail.admin.dto';
import { CountryCreateAdminDto } from '../dtos/admin/country.create.admin.dto';
import { CountryUpdateAdminDto } from '../dtos/admin/country.update.admin.dto';
export declare class CountryAdminController {
    private readonly service;
    constructor(service: CountryAdminService);
    getAll(): Promise<CountryListAdminDto[]>;
    getOne(id: number): Promise<CountryDetailAdminDto>;
    create(payload: CountryCreateAdminDto, file?: Express.Multer.File): Promise<import("../entities/country.entity").Country>;
    update(id: number, payload: CountryUpdateAdminDto, file?: Express.Multer.File): Promise<import("../entities/country.entity").Country>;
    delete(id: number): Promise<void>;
}
