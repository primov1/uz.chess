import { Terms } from '../entities/terms.entity';
import { TermsUpdateAdminDto } from '../dtos/admin/terms.update.admin.dto';
export declare class TermsAdminService {
    get(): Promise<Terms>;
    update(payload: TermsUpdateAdminDto): Promise<Terms>;
}
