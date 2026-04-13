import { OtpCodeAdminService } from '../service/otpCode.admin.service';
import { OtpCodeCreateAdminDto } from '../dtos/admin/otpCode.create.admin.dto';
export declare class OtpCodeAdminController {
    private readonly service;
    constructor(service: OtpCodeAdminService);
    getAll(): Promise<import("../entities/otpCode.entity").OtpCode[]>;
    create(payload: OtpCodeCreateAdminDto): Promise<any>;
    delete(id: number): Promise<void>;
}
