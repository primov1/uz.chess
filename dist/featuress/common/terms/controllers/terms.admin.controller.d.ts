import { TermsAdminService } from '../service/terms.admin.service';
import { TermsUpdateAdminDto } from '../dtos/admin/terms.update.admin.dto';
export declare class TermsAdminController {
    private readonly service;
    constructor(service: TermsAdminService);
    get(): Promise<import("../entities/terms.entity").Terms>;
    update(payload: TermsUpdateAdminDto): Promise<import("../entities/terms.entity").Terms>;
}
