import { PurchasedCoursePublicService } from '../service/purchasedCourse.public.service';
import { PurchasedCourseListPublicDto } from '../dtos/public/purchasedCourse.list.public.dto';
import { PurchasedCourseDetailPublicDto } from '../dtos/public/purchasedCourse.detail.public.dto';
export declare class PurchasedCoursePublicController {
    private readonly service;
    constructor(service: PurchasedCoursePublicService);
    getAll(): Promise<PurchasedCourseListPublicDto[]>;
    getOne(id: number): Promise<PurchasedCourseDetailPublicDto>;
}
