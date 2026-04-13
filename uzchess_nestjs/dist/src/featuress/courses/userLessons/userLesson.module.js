"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserLessonModule = void 0;
const common_1 = require("@nestjs/common");
const userLesson_admin_controller_1 = require("./controllers/userLesson.admin.controller");
const userLesson_public_controller_1 = require("./controllers/userLesson.public.controller");
const userLesson_admin_service_1 = require("./service/userLesson.admin.service");
const userLesson_public_service_1 = require("./service/userLesson.public.service");
let UserLessonModule = class UserLessonModule {
};
exports.UserLessonModule = UserLessonModule;
exports.UserLessonModule = UserLessonModule = __decorate([
    (0, common_1.Module)({
        controllers: [userLesson_admin_controller_1.UserLessonAdminController, userLesson_public_controller_1.UserLessonPublicController],
        providers: [userLesson_admin_service_1.UserLessonAdminService, userLesson_public_service_1.UserLessonPublicService],
    })
], UserLessonModule);
//# sourceMappingURL=userLesson.module.js.map