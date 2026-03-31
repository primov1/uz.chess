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
exports.UserLesson = void 0;
const typeorm_1 = require("typeorm");
const base_model_1 = require("../../../../core/base-model");
const courseLesson_entity_1 = require("../../courseLessons/entities/courseLesson.entity");
const user_entity_1 = require("../../../users/entities/user.entity");
let UserLesson = class UserLesson extends base_model_1.BaseModel {
    userId;
    courseLessonId;
    stoppedAt;
    isCompleted;
    lesson;
    user;
};
exports.UserLesson = UserLesson;
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], UserLesson.prototype, "userId", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], UserLesson.prototype, "courseLessonId", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", Number)
], UserLesson.prototype, "stoppedAt", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: false }),
    __metadata("design:type", Boolean)
], UserLesson.prototype, "isCompleted", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => courseLesson_entity_1.CourseLesson, (lesson) => lesson.userLessons, { onDelete: 'CASCADE', eager: false }),
    (0, typeorm_1.JoinColumn)({ name: 'courseLessonId' }),
    __metadata("design:type", courseLesson_entity_1.CourseLesson)
], UserLesson.prototype, "lesson", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => user_entity_1.User, { onDelete: 'CASCADE', eager: false }),
    (0, typeorm_1.JoinColumn)({ name: 'userId' }),
    __metadata("design:type", user_entity_1.User)
], UserLesson.prototype, "user", void 0);
exports.UserLesson = UserLesson = __decorate([
    (0, typeorm_1.Entity)('users_lessons')
], UserLesson);
//# sourceMappingURL=userLesson.entity.js.map