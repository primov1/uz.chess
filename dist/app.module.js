"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typyeorm_config_1 = require("./config/typyeorm.config");
const news_module_1 = require("./featuress/news/news.module");
const book_module_1 = require("./featuress/library/books/book.module");
const bookLike_module_1 = require("./featuress/library/bookLikes/bookLike.module");
const bookReview_module_1 = require("./featuress/library/bookReviews/bookReview.module");
const bookCategory_module_1 = require("./featuress/library/bookCategories/bookCategory.module");
const player_module_1 = require("./featuress/chess/players/player.module");
const match_module_1 = require("./featuress/chess/matches/match.module");
const country_module_1 = require("./featuress/chess/countries/country.module");
const courseCategory_module_1 = require("./featuress/courses/courseCategories/courseCategory.module");
const course_module_1 = require("./featuress/courses/courses/course.module");
const courseSection_module_1 = require("./featuress/courses/courseSections/courseSection.module");
const courseLesson_module_1 = require("./featuress/courses/courseLessons/courseLesson.module");
const courseLike_module_1 = require("./featuress/courses/courseLikes/courseLike.module");
const courseReview_module_1 = require("./featuress/courses/courseReviews/courseReview.module");
const purchasedCourse_module_1 = require("./featuress/courses/purchasedCourses/purchasedCourse.module");
const userLesson_module_1 = require("./featuress/courses/userLessons/userLesson.module");
const language_module_1 = require("./featuress/common/languages/language.module");
const author_module_1 = require("./featuress/common/authors/author.module");
const otpCode_module_1 = require("./featuress/common/otpCodes/otpCode.module");
const reportCategory_module_1 = require("./featuress/common/reportCategories/reportCategory.module");
const report_module_1 = require("./featuress/common/reports/report.module");
const terms_module_1 = require("./featuress/common/terms/terms.module");
const difficulty_module_1 = require("./featuress/common/difficulties/difficulty.module");
const user_module_1 = require("./featuress/users/user.module");
const newsView_module_1 = require("./featuress/news/newsViews/newsView.module");
const upload_module_1 = require("./featuress/upload/upload.module");
const auth_module_1 = require("./featuress/auth/auth.module");
let AppModule = class AppModule {
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            typeorm_1.TypeOrmModule.forRoot(typyeorm_config_1.typeOrmConfig),
            auth_module_1.AuthModule,
            user_module_1.UserModule,
            news_module_1.NewsModule,
            newsView_module_1.NewsViewModule,
            book_module_1.BookModule,
            bookLike_module_1.BookLikeModule,
            bookReview_module_1.BookReviewModule,
            bookCategory_module_1.BookCategoryModule,
            player_module_1.PlayerModule,
            match_module_1.MatchModule,
            country_module_1.CountryModule,
            courseCategory_module_1.CourseCategoryModule,
            course_module_1.CourseModule,
            courseSection_module_1.CourseSectionModule,
            courseLesson_module_1.CourseLessonModule,
            courseLike_module_1.CourseLikeModule,
            courseReview_module_1.CourseReviewModule,
            purchasedCourse_module_1.PurchasedCourseModule,
            userLesson_module_1.UserLessonModule,
            language_module_1.LanguageModule,
            author_module_1.AuthorModule,
            otpCode_module_1.OtpCodeModule,
            reportCategory_module_1.ReportCategoryModule,
            report_module_1.ReportModule,
            terms_module_1.TermsModule,
            difficulty_module_1.DifficultyModule,
            upload_module_1.UploadModule,
        ],
    })
], AppModule);
//# sourceMappingURL=app.module.js.map