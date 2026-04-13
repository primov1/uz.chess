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
exports.PurchasedCoursePublicController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const purchasedCourse_public_service_1 = require("../service/purchasedCourse.public.service");
const purchasedCourse_list_public_dto_1 = require("../dtos/public/purchasedCourse.list.public.dto");
const purchasedCourse_detail_public_dto_1 = require("../dtos/public/purchasedCourse.detail.public.dto");
let PurchasedCoursePublicController = class PurchasedCoursePublicController {
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
exports.PurchasedCoursePublicController = PurchasedCoursePublicController;
__decorate([
    (0, common_1.Get)(),
    (0, swagger_1.ApiOperation)({ summary: 'Get all' }),
    (0, swagger_1.ApiOkResponse)({ type: () => purchasedCourse_list_public_dto_1.PurchasedCourseListPublicDto, isArray: true }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], PurchasedCoursePublicController.prototype, "getAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Get by id' }),
    (0, swagger_1.ApiOkResponse)({ type: () => purchasedCourse_detail_public_dto_1.PurchasedCourseDetailPublicDto }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], PurchasedCoursePublicController.prototype, "getOne", null);
exports.PurchasedCoursePublicController = PurchasedCoursePublicController = __decorate([
    (0, swagger_1.ApiTags)('Public / Purchased Courses'),
    (0, common_1.Controller)('public/purchased-courses'),
    __metadata("design:paramtypes", [purchasedCourse_public_service_1.PurchasedCoursePublicService])
], PurchasedCoursePublicController);
//# sourceMappingURL=purchasedCourse.public.controller.js.map