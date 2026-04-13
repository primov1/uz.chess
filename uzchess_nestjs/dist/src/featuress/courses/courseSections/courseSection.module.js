"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CourseSectionModule = void 0;
const common_1 = require("@nestjs/common");
const courseSection_admin_controller_1 = require("./controllers/courseSection.admin.controller");
const courseSection_public_controller_1 = require("./controllers/courseSection.public.controller");
const courseSection_admin_service_1 = require("./service/courseSection.admin.service");
const courseSection_public_service_1 = require("./service/courseSection.public.service");
let CourseSectionModule = class CourseSectionModule {
};
exports.CourseSectionModule = CourseSectionModule;
exports.CourseSectionModule = CourseSectionModule = __decorate([
    (0, common_1.Module)({
        controllers: [courseSection_admin_controller_1.CourseSectionAdminController, courseSection_public_controller_1.CourseSectionPublicController],
        providers: [courseSection_admin_service_1.CourseSectionAdminService, courseSection_public_service_1.CourseSectionPublicService],
    })
], CourseSectionModule);
//# sourceMappingURL=courseSection.module.js.map