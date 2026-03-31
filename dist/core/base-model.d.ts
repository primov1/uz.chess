import { BaseEntity } from 'typeorm';
export declare class BaseModel extends BaseEntity {
    id: number;
    createdAt: Date;
    updatedAt?: Date;
}
