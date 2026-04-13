"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Course = void 0;
const typeorm_1 = require("typeorm");
const base_model_1 = require("../../../../core/base-model");
const courseLike_entity_1 = require("../../courseLikes/entities/courseLike.entity");
const courseReview_entity_1 = require("../../courseReviews/entities/courseReview.entity");
const courseSection_entity_1 = require("../../courseSections/entities/courseSection.entity");
const purchasedCourse_entity_1 = require("../../purchasedCourses/entities/purchasedCourse.entity");
let Course = class Course extends base_model_1.BaseModel {
    authorId;
    categoryId;
    languageId;
    difficultyId;
    title;
    image;
    price;
    newPrice;
    isPublished;
    reviewsCount;
    rating;
    sectionsCount;
    lessonsCount;
    likesCount;
    likes;
    reviews;
    sections;
    purchasedCourses;
};
exports.Course = Course;
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], Course.prototype, "authorId", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], Course.prototype, "categoryId", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], Course.prototype, "languageId", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], Course.prototype, "difficultyId", void 0);
__decorate([
    (0, typeorm_1.Column)({ length: 128 }),
    __metadata("design:type", String)
], Course.prototype, "title", void 0);
__decorate([
    (0, typeorm_1.Column)({ length: 128 }),
    __metadata("design:type", String)
], Course.prototype, "image", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'decimal', precision: 12, scale: 2 }),
    __metadata("design:type", Number)
], Course.prototype, "price", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'decimal', precision: 12, scale: 2, nullable: true }),
    __metadata("design:type", Number)
], Course.prototype, "newPrice", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: false }),
    __metadata("design:type", Boolean)
], Course.prototype, "isPublished", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: 0 }),
    __metadata("design:type", Number)
], Course.prototype, "reviewsCount", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'decimal', precision: 2, scale: 1, nullable: true }),
    __metadata("design:type", Number)
], Course.prototype, "rating", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: 0 }),
    __metadata("design:type", Number)
], Course.prototype, "sectionsCount", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: 0 }),
    __metadata("design:type", Number)
], Course.prototype, "lessonsCount", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: 0 }),
    __metadata("design:type", Number)
], Course.prototype, "likesCount", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => courseLike_entity_1.CourseLike, (like) => like.course, { cascade: false }),
    __metadata("design:type", Array)
], Course.prototype, "likes", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => courseReview_entity_1.CourseReview, (review) => review.course, { cascade: false }),
    __metadata("design:type", Array)
], Course.prototype, "reviews", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => courseSection_entity_1.CourseSection, (section) => section.course, {
        cascade: false,
    }),
    __metadata("design:type", Array)
], Course.prototype, "sections", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => purchasedCourse_entity_1.PurchasedCourse, (pc) => pc.course, { cascade: false }),
    __metadata("design:type", Array)
], Course.prototype, "purchasedCourses", void 0);
exports.Course = Course = __decorate([
    (0, typeorm_1.Entity)('courses')
], Course);
//# sourceMappingURL=course.entity.js.map