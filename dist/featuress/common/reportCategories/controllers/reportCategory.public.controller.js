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
exports.ReportCategoryPublicController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const reportCategory_public_service_1 = require("../service/reportCategory.public.service");
const reportCategory_list_public_dto_1 = require("../dtos/public/reportCategory.list.public.dto");
const reportCategory_detail_public_dto_1 = require("../dtos/public/reportCategory.detail.public.dto");
let ReportCategoryPublicController = class ReportCategoryPublicController {
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
exports.ReportCategoryPublicController = ReportCategoryPublicController;
__decorate([
    (0, common_1.Get)(),
    (0, swagger_1.ApiOperation)({ summary: 'Get all' }),
    (0, swagger_1.ApiOkResponse)({ type: () => reportCategory_list_public_dto_1.ReportCategoryListPublicDto, isArray: true }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], ReportCategoryPublicController.prototype, "getAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Get by id' }),
    (0, swagger_1.ApiOkResponse)({ type: () => reportCategory_detail_public_dto_1.ReportCategoryDetailPublicDto }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], ReportCategoryPublicController.prototype, "getOne", null);
exports.ReportCategoryPublicController = ReportCategoryPublicController = __decorate([
    (0, swagger_1.ApiTags)('Public / Report Categories'),
    (0, common_1.Controller)('public/report-categories'),
    __metadata("design:paramtypes", [reportCategory_public_service_1.ReportCategoryPublicService])
], ReportCategoryPublicController);
//# sourceMappingURL=reportCategory.public.controller.js.map