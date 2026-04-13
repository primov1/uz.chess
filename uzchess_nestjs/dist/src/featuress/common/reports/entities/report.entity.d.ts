import { BaseModel } from '@/core/base-model';
import { User } from '../../../users/entities/user.entity';
import { ReportCategory } from '../../reportCategories/entities/reportCategory.entity';
export declare enum ReportType {
    BOOK = "book",
    COURSE = "course"
}
export declare class Report extends BaseModel {
    userId: number;
    reportCategoryId: number;
    target: ReportType;
    targetId: number;
    description?: string;
    date: Date;
    user: User;
    reportCategory: ReportCategory;
}
