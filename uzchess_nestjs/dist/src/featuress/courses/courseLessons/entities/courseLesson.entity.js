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
exports.CourseLesson = void 0;
const typeorm_1 = require("typeorm");
const base_model_1 = require("../../../../core/base-model");
const course_entity_1 = require("../../courses/entities/course.entity");
const courseSection_entity_1 = require("../../courseSections/entities/courseSection.entity");
const userLesson_entity_1 = require("../../userLessons/entities/userLesson.entity");
let CourseLesson = class CourseLesson extends base_model_1.BaseModel {
    courseId;
    courseSectionId;
    title;
    content;
    thumbnail;
    video;
    order;
    date;
    isFree;
    course;
    section;
    userLessons;
};
exports.CourseLesson = CourseLesson;
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], CourseLesson.prototype, "courseId", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], CourseLesson.prototype, "courseSectionId", void 0);
__decorate([
    (0, typeorm_1.Column)({ length: 128 }),
    __metadata("design:type", String)
], CourseLesson.prototype, "title", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], CourseLesson.prototype, "content", void 0);
__decorate([
    (0, typeorm_1.Column)({ length: 128, nullable: true }),
    __metadata("design:type", String)
], CourseLesson.prototype, "thumbnail", void 0);
__decorate([
    (0, typeorm_1.Column)({ length: 256 }),
    __metadata("design:type", String)
], CourseLesson.prototype, "video", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", Number)
], CourseLesson.prototype, "order", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)({ type: 'timestamp' }),
    __metadata("design:type", Date)
], CourseLesson.prototype, "date", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: false }),
    __metadata("design:type", Boolean)
], CourseLesson.prototype, "isFree", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => course_entity_1.Course, { onDelete: 'CASCADE', eager: false }),
    (0, typeorm_1.JoinColumn)({ name: 'courseId' }),
    __metadata("design:type", course_entity_1.Course)
], CourseLesson.prototype, "course", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => courseSection_entity_1.CourseSection, (section) => section.lessons, {
        onDelete: 'CASCADE',
        eager: false,
    }),
    (0, typeorm_1.JoinColumn)({ name: 'courseSectionId' }),
    __metadata("design:type", courseSection_entity_1.CourseSection)
], CourseLesson.prototype, "section", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => userLesson_entity_1.UserLesson, (ul) => ul.lesson, { cascade: false }),
    __metadata("design:type", Array)
], CourseLesson.prototype, "userLessons", void 0);
exports.CourseLesson = CourseLesson = __decorate([
    (0, typeorm_1.Entity)('courseLessons')
], CourseLesson);
//# sourceMappingURL=courseLesson.entity.js.map