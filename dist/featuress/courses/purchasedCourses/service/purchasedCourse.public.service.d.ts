import { PurchasedCourseListPublicDto } from '../dtos/public/purchasedCourse.list.public.dto';
import { PurchasedCourseDetailPublicDto } from '../dtos/public/purchasedCourse.detail.public.dto';
export declare class PurchasedCoursePublicService {
    getAll(): Promise<PurchasedCourseListPublicDto[]>;
    getOne(id: number): Promise<PurchasedCourseDetailPublicDto>;
}
