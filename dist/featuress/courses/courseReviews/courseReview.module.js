"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CourseReviewModule = void 0;
const common_1 = require("@nestjs/common");
const courseReview_admin_controller_1 = require("./controllers/courseReview.admin.controller");
const courseReview_public_controller_1 = require("./controllers/courseReview.public.controller");
const courseReview_admin_service_1 = require("./service/courseReview.admin.service");
const courseReview_public_service_1 = require("./service/courseReview.public.service");
let CourseReviewModule = class CourseReviewModule {
};
exports.CourseReviewModule = CourseReviewModule;
exports.CourseReviewModule = CourseReviewModule = __decorate([
    (0, common_1.Module)({
        controllers: [courseReview_admin_controller_1.CourseReviewAdminController, courseReview_public_controller_1.CourseReviewPublicController],
        providers: [courseReview_admin_service_1.CourseReviewAdminService, courseReview_public_service_1.CourseReviewPublicService],
    })
], CourseReviewModule);
//# sourceMappingURL=courseReview.module.js.map