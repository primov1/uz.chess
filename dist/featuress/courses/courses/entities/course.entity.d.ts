import { BaseModel } from '../../../../core/base-model';
import { CourseLike } from '../../courseLikes/entities/courseLike.entity';
import { CourseReview } from '../../courseReviews/entities/courseReview.entity';
import { CourseSection } from '../../courseSections/entities/courseSection.entity';
import { PurchasedCourse } from '../../purchasedCourses/entities/purchasedCourse.entity';
export declare class Course extends BaseModel {
    authorId: number;
    categoryId: number;
    languageId: number;
    difficultyId: number;
    title: string;
    image: string;
    price: number;
    newPrice?: number;
    reviewsCount: number;
    rating?: number;
    sectionsCount: number;
    lessonsCount: number;
    likesCount: number;
    likes: CourseLike[];
    reviews: CourseReview[];
    sections: CourseSection[];
    purchasedCourses: PurchasedCourse[];
}
