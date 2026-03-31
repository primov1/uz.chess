import { BaseModel } from '../../../../core/base-model';
export declare enum ReportType {
    BOOK = "book",
    COURSE = "course"
}
export declare class Report extends BaseModel {
    reportCategoryId: number;
    target: ReportType;
    targetId: number;
    description?: string;
    date: Date;
}
