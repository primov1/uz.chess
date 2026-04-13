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
exports.NewsViewPublicController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const newsView_public_service_1 = require("../service/newsView.public.service");
const newsView_create_public_dto_1 = require("../dtos/public/newsView.create.public.dto");
let NewsViewPublicController = class NewsViewPublicController {
    service;
    constructor(service) {
        this.service = service;
    }
    create(userId, payload) {
        return this.service.create(userId, payload);
    }
};
exports.NewsViewPublicController = NewsViewPublicController;
__decorate([
    (0, common_1.Post)(':userId'),
    (0, swagger_1.ApiOperation)({ summary: 'Register news view' }),
    __param(0, (0, common_1.Param)('userId')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, newsView_create_public_dto_1.NewsViewCreatePublicDto]),
    __metadata("design:returntype", void 0)
], NewsViewPublicController.prototype, "create", null);
exports.NewsViewPublicController = NewsViewPublicController = __decorate([
    (0, swagger_1.ApiTags)('Public / News Views'),
    (0, common_1.Controller)('public/news-views'),
    __metadata("design:paramtypes", [newsView_public_service_1.NewsViewPublicService])
], NewsViewPublicController);
//# sourceMappingURL=newsView.public.controller.js.map