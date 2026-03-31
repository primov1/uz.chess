"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CourseLessonModule = void 0;
const common_1 = require("@nestjs/common");
const courseLesson_admin_controller_1 = require("./controllers/courseLesson.admin.controller");
const courseLesson_public_controller_1 = require("./controllers/courseLesson.public.controller");
const courseLesson_admin_service_1 = require("./service/courseLesson.admin.service");
const courseLesson_public_service_1 = require("./service/courseLesson.public.service");
let CourseLessonModule = class CourseLessonModule {
};
exports.CourseLessonModule = CourseLessonModule;
exports.CourseLessonModule = CourseLessonModule = __decorate([
    (0, common_1.Module)({
        controllers: [courseLesson_admin_controller_1.CourseLessonAdminController, courseLesson_public_controller_1.CourseLessonPublicController],
        providers: [courseLesson_admin_service_1.CourseLessonAdminService, courseLesson_public_service_1.CourseLessonPublicService],
    })
], CourseLessonModule);
//# sourceMappingURL=courseLesson.module.js.map