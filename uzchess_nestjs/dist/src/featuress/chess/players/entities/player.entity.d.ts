import { BaseModel } from '../../../../core/base-model';
import { Country } from '../../countries/entities/country.entity';
export declare class Player extends BaseModel {
    countryId: number;
    fullName: string;
    image?: string;
    classic?: number;
    rapid?: number;
    blitz?: number;
    country: Country;
}
