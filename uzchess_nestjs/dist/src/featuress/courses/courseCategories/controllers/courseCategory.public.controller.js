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
exports.CourseCategoryPublicController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const courseCategory_public_service_1 = require("../service/courseCategory.public.service");
const courseCategory_list_public_dto_1 = require("../dtos/public/courseCategory.list.public.dto");
const courseCategory_detail_public_dto_1 = require("../dtos/public/courseCategory.detail.public.dto");
let CourseCategoryPublicController = class CourseCategoryPublicController {
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
exports.CourseCategoryPublicController = CourseCategoryPublicController;
__decorate([
    (0, common_1.Get)(),
    (0, swagger_1.ApiOperation)({ summary: 'Get all' }),
    (0, swagger_1.ApiOkResponse)({ type: () => courseCategory_list_public_dto_1.CourseCategoryListPublicDto, isArray: true }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], CourseCategoryPublicController.prototype, "getAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Get by id' }),
    (0, swagger_1.ApiOkResponse)({ type: () => courseCategory_detail_public_dto_1.CourseCategoryDetailPublicDto }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], CourseCategoryPublicController.prototype, "getOne", null);
exports.CourseCategoryPublicController = CourseCategoryPublicController = __decorate([
    (0, swagger_1.ApiTags)('Public / Course Categories'),
    (0, common_1.Controller)('public/course-categories'),
    __metadata("design:paramtypes", [courseCategory_public_service_1.CourseCategoryPublicService])
], CourseCategoryPublicController);
//# sourceMappingURL=courseCategory.public.controller.js.map