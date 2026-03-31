import { TermsPublicService } from '../service/terms.public.service';
import { TermsDetailPublicDto } from '../dtos/public/terms.detail.public.dto';
export declare class TermsPublicController {
    private readonly service;
    constructor(service: TermsPublicService);
    get(): Promise<TermsDetailPublicDto>;
}
