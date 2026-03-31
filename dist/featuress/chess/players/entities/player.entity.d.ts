import { BaseModel } from '../../../../core/base-model';
export declare class Player extends BaseModel {
    countryId: number;
    fullName: string;
    image?: string;
    classic?: number;
    rapid?: number;
    blitz?: number;
}
