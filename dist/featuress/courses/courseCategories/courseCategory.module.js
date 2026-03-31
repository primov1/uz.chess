"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CourseCategoryModule = void 0;
const common_1 = require("@nestjs/common");
const courseCategory_admin_controller_1 = require("./controllers/courseCategory.admin.controller");
const courseCategory_public_controller_1 = require("./controllers/courseCategory.public.controller");
const courseCategory_admin_service_1 = require("./service/courseCategory.admin.service");
const courseCategory_public_service_1 = require("./service/courseCategory.public.service");
let CourseCategoryModule = class CourseCategoryModule {
};
exports.CourseCategoryModule = CourseCategoryModule;
exports.CourseCategoryModule = CourseCategoryModule = __decorate([
    (0, common_1.Module)({
        controllers: [courseCategory_admin_controller_1.CourseCategoryAdminController, courseCategory_public_controller_1.CourseCategoryPublicController],
        providers: [courseCategory_admin_service_1.CourseCategoryAdminService, courseCategory_public_service_1.CourseCategoryPublicService],
    })
], CourseCategoryModule);
//# sourceMappingURL=courseCategory.module.js.map