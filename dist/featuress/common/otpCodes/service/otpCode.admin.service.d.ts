import { OtpCode } from '../entities/otpCode.entity';
import { OtpCodeCreateAdminDto } from '../dtos/admin/otpCode.create.admin.dto';
export declare class OtpCodeAdminService {
    getAll(): Promise<OtpCode[]>;
    create(payload: OtpCodeCreateAdminDto): Promise<any>;
    delete(id: number): Promise<void>;
}
