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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserLessonPublicController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const userLesson_public_service_1 = require("../service/userLesson.public.service");
const userLesson_list_public_dto_1 = require("../dtos/public/userLesson.list.public.dto");
const userLesson_detail_public_dto_1 = require("../dtos/public/userLesson.detail.public.dto");
let UserLessonPublicController = class UserLessonPublicController {
    service;
    constructor(service) {
        this.service = service;
    }
    getAll() {
        return this.service.getAll();
    }
    getOne(id) {
        return this.service.getOne(id);
    }
};
exports.UserLessonPublicController = UserLessonPublicController;
__decorate([
    (0, common_1.Get)(),
    (0, swagger_1.ApiOperation)({ summary: 'Get all' }),
    (0, swagger_1.ApiOkResponse)({ type: () => userLesson_list_public_dto_1.UserLessonListPublicDto, isArray: true }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], UserLessonPublicController.prototype, "getAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Get by id' }),
    (0, swagger_1.ApiOkResponse)({ type: () => userLesson_detail_public_dto_1.UserLessonDetailPublicDto }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], UserLessonPublicController.prototype, "getOne", null);
exports.UserLessonPublicController = UserLessonPublicController = __decorate([
    (0, swagger_1.ApiTags)('Public / User Lessons'),
    (0, common_1.Controller)('public/user-lessons'),
    __metadata("design:paramtypes", [userLesson_public_service_1.UserLessonPublicService])
], UserLessonPublicController);
//# sourceMappingURL=userLesson.public.controller.js.map