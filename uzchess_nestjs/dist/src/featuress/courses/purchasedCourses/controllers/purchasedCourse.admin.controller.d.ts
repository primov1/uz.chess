import { PurchasedCourseAdminService } from '../service/purchasedCourse.admin.service';
import { PurchasedCourseListAdminDto } from '../dtos/admin/purchasedCourse.list.admin.dto';
import { PurchasedCourseDetailAdminDto } from '../dtos/admin/purchasedCourse.detail.admin.dto';
import { PurchasedCourseCreateAdminDto } from '../dtos/admin/purchasedCourse.create.admin.dto';
import { PurchasedCourseUpdateAdminDto } from '../dtos/admin/purchasedCourse.update.admin.dto';
export declare class PurchasedCourseAdminController {
    private readonly service;
    constructor(service: PurchasedCourseAdminService);
    getAll(): Promise<PurchasedCourseListAdminDto[]>;
    getOne(id: number): Promise<PurchasedCourseDetailAdminDto>;
    create(payload: PurchasedCourseCreateAdminDto): Promise<import("../entities/purchasedCourse.entity").PurchasedCourse>;
    update(id: number, payload: PurchasedCourseUpdateAdminDto): Promise<import("../entities/purchasedCourse.entity").PurchasedCourse>;
    delete(id: number): Promise<void>;
}
