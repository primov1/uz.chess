import { User } from '../../../users/entities/user.entity';
import { ReportPublicService } from '../service/report.public.service';
import { ReportListPublicDto } from '../dtos/public/report.list.public.dto';
import { ReportDetailPublicDto } from '../dtos/public/report.detail.public.dto';
import { ReportCreatePublicDto } from '../dtos/public/report.create.public.dto';
export declare class ReportPublicController {
    private readonly service;
    constructor(service: ReportPublicService);
    getAll(): Promise<ReportListPublicDto[]>;
    getOne(id: number): Promise<ReportDetailPublicDto>;
    create(payload: ReportCreatePublicDto, user: User): Promise<ReportDetailPublicDto>;
}
