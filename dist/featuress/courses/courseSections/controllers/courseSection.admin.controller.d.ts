import { CourseSectionAdminService } from '../service/courseSection.admin.service';
import { CourseSectionListAdminDto } from '../dtos/admin/courseSection.list.admin.dto';
import { CourseSectionDetailAdminDto } from '../dtos/admin/courseSection.detail.admin.dto';
import { CourseSectionCreateAdminDto } from '../dtos/admin/courseSection.create.admin.dto';
import { CourseSectionUpdateAdminDto } from '../dtos/admin/courseSection.update.admin.dto';
export declare class CourseSectionAdminController {
    private readonly service;
    constructor(service: CourseSectionAdminService);
    getAll(): Promise<CourseSectionListAdminDto[]>;
    getOne(id: number): Promise<CourseSectionDetailAdminDto>;
    create(payload: CourseSectionCreateAdminDto): Promise<import("../entities/courseSection.entity").CourseSection>;
    update(id: number, payload: CourseSectionUpdateAdminDto): Promise<import("../entities/courseSection.entity").CourseSection>;
    delete(id: number): Promise<void>;
}
