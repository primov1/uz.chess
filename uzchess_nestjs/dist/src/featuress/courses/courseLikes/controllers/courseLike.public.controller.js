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
exports.CourseLikePublicController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const courseLike_public_service_1 = require("../service/courseLike.public.service");
const courseLike_list_public_dto_1 = require("../dtos/public/courseLike.list.public.dto");
const courseLike_detail_public_dto_1 = require("../dtos/public/courseLike.detail.public.dto");
const current_user_decorator_1 = require("../../../auth/decorators/current-user.decorator");
const public_decorator_1 = require("../../../auth/decorators/public.decorator");
let CourseLikePublicController = class CourseLikePublicController {
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
    getMyLikes(user) {
        return this.service.getMyLikes(user.sub);
    }
    toggle(courseId, user) {
        return this.service.toggle(courseId, user.sub);
    }
};
exports.CourseLikePublicController = CourseLikePublicController;
__decorate([
    (0, public_decorator_1.Public)(),
    (0, common_1.Get)(),
    (0, swagger_1.ApiOperation)({ summary: 'Barcha course likelarni olish' }),
    (0, swagger_1.ApiOkResponse)({ type: () => courseLike_list_public_dto_1.CourseLikeListPublicDto, isArray: true }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], CourseLikePublicController.prototype, "getAll", null);
__decorate([
    (0, public_decorator_1.Public)(),
    (0, common_1.Get)(':id'),
    (0, swagger_1.ApiOperation)({ summary: "ID bo'yicha course like olish" }),
    (0, swagger_1.ApiOkResponse)({ type: () => courseLike_detail_public_dto_1.CourseLikeDetailPublicDto }),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], CourseLikePublicController.prototype, "getOne", null);
__decorate([
    (0, swagger_1.ApiBearerAuth)(),
    (0, common_1.Get)('my/likes'),
    (0, swagger_1.ApiOperation)({
        summary: 'Mening like qilgan kurslarim (token talab qilinadi)',
    }),
    (0, swagger_1.ApiOkResponse)({ type: () => courseLike_list_public_dto_1.CourseLikeListPublicDto, isArray: true }),
    __param(0, (0, current_user_decorator_1.CurrentUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], CourseLikePublicController.prototype, "getMyLikes", null);
__decorate([
    (0, swagger_1.ApiBearerAuth)(),
    (0, common_1.Post)('toggle/:courseId'),
    (0, swagger_1.ApiOperation)({
        summary: 'Kursga like/unlike toggle (token talab qilinadi)',
        description: "Agar foydalanuvchi avval like qilgan bo'lsa — o'chiradi, " +
            "aks holda — like qo'shadi.",
    }),
    __param(0, (0, common_1.Param)('courseId', common_1.ParseIntPipe)),
    __param(1, (0, current_user_decorator_1.CurrentUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Object]),
    __metadata("design:returntype", void 0)
], CourseLikePublicController.prototype, "toggle", null);
exports.CourseLikePublicController = CourseLikePublicController = __decorate([
    (0, swagger_1.ApiTags)('Public / Course Likes'),
    (0, common_1.Controller)('public/course-likes'),
    __metadata("design:paramtypes", [courseLike_public_service_1.CourseLikePublicService])
], CourseLikePublicController);
//# sourceMappingURL=courseLike.public.controller.js.map