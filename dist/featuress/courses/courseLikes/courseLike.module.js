"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CourseLikeModule = void 0;
const common_1 = require("@nestjs/common");
const courseLike_admin_controller_1 = require("./controllers/courseLike.admin.controller");
const courseLike_public_controller_1 = require("./controllers/courseLike.public.controller");
const courseLike_admin_service_1 = require("./service/courseLike.admin.service");
const courseLike_public_service_1 = require("./service/courseLike.public.service");
let CourseLikeModule = class CourseLikeModule {
};
exports.CourseLikeModule = CourseLikeModule;
exports.CourseLikeModule = CourseLikeModule = __decorate([
    (0, common_1.Module)({
        controllers: [courseLike_admin_controller_1.CourseLikeAdminController, courseLike_public_controller_1.CourseLikePublicController],
        providers: [courseLike_admin_service_1.CourseLikeAdminService, courseLike_public_service_1.CourseLikePublicService],
    })
], CourseLikeModule);
//# sourceMappingURL=courseLike.module.js.map