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
exports.DifficultyPublicController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const difficulty_public_service_1 = require("../service/difficulty.public.service");
const difficulty_list_public_dto_1 = require("../dtos/public/difficulty.list.public.dto");
const difficulty_detail_public_dto_1 = require("../dtos/public/difficulty.detail.public.dto");
let DifficultyPublicController = class DifficultyPublicController {
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
exports.DifficultyPublicController = DifficultyPublicController;
__decorate([
    (0, common_1.Get)(),
    (0, swagger_1.ApiOperation)({ summary: 'Get all difficulties' }),
    (0, swagger_1.ApiOkResponse)({ type: () => difficulty_list_public_dto_1.DifficultyListPublicDto, isArray: true }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], DifficultyPublicController.prototype, "getAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Get difficulty by id' }),
    (0, swagger_1.ApiOkResponse)({ type: () => difficulty_detail_public_dto_1.DifficultyDetailPublicDto }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], DifficultyPublicController.prototype, "getOne", null);
exports.DifficultyPublicController = DifficultyPublicController = __decorate([
    (0, swagger_1.ApiTags)('Public / Difficulties'),
    (0, common_1.Controller)('public/difficulties'),
    __metadata("design:paramtypes", [difficulty_public_service_1.DifficultyPublicService])
], DifficultyPublicController);
//# sourceMappingURL=difficulty.public.controller.js.map