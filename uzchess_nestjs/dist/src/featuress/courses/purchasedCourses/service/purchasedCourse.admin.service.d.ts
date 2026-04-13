import { PurchasedCourse } from '../entities/purchasedCourse.entity';
import { PurchasedCourseListAdminDto } from '../dtos/admin/purchasedCourse.list.admin.dto';
import { PurchasedCourseDetailAdminDto } from '../dtos/admin/purchasedCourse.detail.admin.dto';
import { PurchasedCourseCreateAdminDto } from '../dtos/admin/purchasedCourse.create.admin.dto';
import { PurchasedCourseUpdateAdminDto } from '../dtos/admin/purchasedCourse.update.admin.dto';
export declare class PurchasedCourseAdminService {
    getAll(): Promise<PurchasedCourseListAdminDto[]>;
    getOne(id: number): Promise<PurchasedCourseDetailAdminDto>;
    create(payload: PurchasedCourseCreateAdminDto): Promise<PurchasedCourse>;
    update(id: number, payload: PurchasedCourseUpdateAdminDto): Promise<PurchasedCourse>;
    delete(id: number): Promise<void>;
}
