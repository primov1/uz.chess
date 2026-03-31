"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CourseModule = void 0;
const common_1 = require("@nestjs/common");
const course_admin_controller_1 = require("./controllers/course.admin.controller");
const course_public_controller_1 = require("./controllers/course.public.controller");
const course_admin_service_1 = require("./service/course.admin.service");
const course_public_service_1 = require("./service/course.public.service");
let CourseModule = class CourseModule {
};
exports.CourseModule = CourseModule;
exports.CourseModule = CourseModule = __decorate([
    (0, common_1.Module)({
        controllers: [course_admin_controller_1.CourseAdminController, course_public_controller_1.CoursePublicController],
        providers: [course_admin_service_1.CourseAdminService, course_public_service_1.CoursePublicService],
    })
], CourseModule);
//# sourceMappingURL=course.module.js.map