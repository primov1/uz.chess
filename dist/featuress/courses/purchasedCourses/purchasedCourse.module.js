"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PurchasedCourseModule = void 0;
const common_1 = require("@nestjs/common");
const purchasedCourse_admin_controller_1 = require("./controllers/purchasedCourse.admin.controller");
const purchasedCourse_public_controller_1 = require("./controllers/purchasedCourse.public.controller");
const purchasedCourse_admin_service_1 = require("./service/purchasedCourse.admin.service");
const purchasedCourse_public_service_1 = require("./service/purchasedCourse.public.service");
let PurchasedCourseModule = class PurchasedCourseModule {
};
exports.PurchasedCourseModule = PurchasedCourseModule;
exports.PurchasedCourseModule = PurchasedCourseModule = __decorate([
    (0, common_1.Module)({
        controllers: [purchasedCourse_admin_controller_1.PurchasedCourseAdminController, purchasedCourse_public_controller_1.PurchasedCoursePublicController],
        providers: [purchasedCourse_admin_service_1.PurchasedCourseAdminService, purchasedCourse_public_service_1.PurchasedCoursePublicService],
    })
], PurchasedCourseModule);
//# sourceMappingURL=purchasedCourse.module.js.map