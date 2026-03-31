import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { typeOrmConfig } from '@/config/typyeorm.config';
import { NewsModule } from '@/featuress/news/news.module';
import { BookModule } from '@/featuress/library/books/book.module';
import { BookLikeModule } from '@/featuress/library/bookLikes/bookLike.module';
import { BookReviewModule } from '@/featuress/library/bookReviews/bookReview.module';
import { BookCategoryModule } from '@/featuress/library/bookCategories/bookCategory.module';
import { PlayerModule } from '@/featuress/chess/players/player.module';
import { MatchModule } from '@/featuress/chess/matches/match.module';
import { CountryModule } from '@/featuress/chess/countries/country.module';
import { CourseCategoryModule } from '@/featuress/courses/courseCategories/courseCategory.module';
import { CourseModule } from '@/featuress/courses/courses/course.module';
import { CourseSectionModule } from '@/featuress/courses/courseSections/courseSection.module';
import { CourseLessonModule } from '@/featuress/courses/courseLessons/courseLesson.module';
import { CourseLikeModule } from '@/featuress/courses/courseLikes/courseLike.module';
import { CourseReviewModule } from '@/featuress/courses/courseReviews/courseReview.module';
import { PurchasedCourseModule } from '@/featuress/courses/purchasedCourses/purchasedCourse.module';
import { UserLessonModule } from '@/featuress/courses/userLessons/userLesson.module';
import { LanguageModule } from '@/featuress/common/languages/language.module';
import { AuthorModule } from '@/featuress/common/authors/author.module';
import { OtpCodeModule } from '@/featuress/common/otpCodes/otpCode.module';
import { ReportCategoryModule } from '@/featuress/common/reportCategories/reportCategory.module';
import { ReportModule } from '@/featuress/common/reports/report.module';
import { TermsModule } from '@/featuress/common/terms/terms.module';
import { DifficultyModule } from '@/featuress/common/difficulties/difficulty.module';
import { UserModule } from '@/featuress/users/user.module';
import { NewsViewModule } from '@/featuress/news/newsViews/newsView.module';
import { UploadModule } from '@/featuress/upload/upload.module';
import { AuthModule } from '@/featuress/auth/auth.module';

@Module({
  imports: [
    TypeOrmModule.forRoot(typeOrmConfig),
    AuthModule,
    UserModule,
    NewsModule,
    NewsViewModule,
    BookModule,
    BookLikeModule,
    BookReviewModule,
    BookCategoryModule,
    PlayerModule,
    MatchModule,
    CountryModule,
    CourseCategoryModule,
    CourseModule,
    CourseSectionModule,
    CourseLessonModule,
    CourseLikeModule,
    CourseReviewModule,
    PurchasedCourseModule,
    UserLessonModule,
    LanguageModule,
    AuthorModule,
    OtpCodeModule,
    ReportCategoryModule,
    ReportModule,
    TermsModule,
    DifficultyModule,
    UploadModule,
  ],
})
export class AppModule {}
