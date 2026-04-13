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
exports.BookLikePublicController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const bookLike_public_service_1 = require("../service/bookLike.public.service");
const bookLike_list_public_dto_1 = require("../dtos/public/bookLike.list.public.dto");
const bookLike_detail_public_dto_1 = require("../dtos/public/bookLike.detail.public.dto");
const current_user_decorator_1 = require("../../../auth/decorators/current-user.decorator");
const public_decorator_1 = require("../../../auth/decorators/public.decorator");
let BookLikePublicController = class BookLikePublicController {
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
    toggle(bookId, user) {
        return this.service.toggle(bookId, user.sub);
    }
};
exports.BookLikePublicController = BookLikePublicController;
__decorate([
    (0, public_decorator_1.Public)(),
    (0, common_1.Get)(),
    (0, swagger_1.ApiOperation)({ summary: 'Barcha book likelarni olish' }),
    (0, swagger_1.ApiOkResponse)({ type: () => bookLike_list_public_dto_1.BookLikeListPublicDto, isArray: true }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], BookLikePublicController.prototype, "getAll", null);
__decorate([
    (0, public_decorator_1.Public)(),
    (0, common_1.Get)(':id'),
    (0, swagger_1.ApiOperation)({ summary: "ID bo'yicha book like olish" }),
    (0, swagger_1.ApiOkResponse)({ type: () => bookLike_detail_public_dto_1.BookLikeDetailPublicDto }),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], BookLikePublicController.prototype, "getOne", null);
__decorate([
    (0, swagger_1.ApiBearerAuth)(),
    (0, common_1.Get)('my/likes'),
    (0, swagger_1.ApiOperation)({
        summary: 'Mening like qilgan kitoblarim (token talab qilinadi)',
    }),
    (0, swagger_1.ApiOkResponse)({ type: () => bookLike_list_public_dto_1.BookLikeListPublicDto, isArray: true }),
    __param(0, (0, current_user_decorator_1.CurrentUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], BookLikePublicController.prototype, "getMyLikes", null);
__decorate([
    (0, swagger_1.ApiBearerAuth)(),
    (0, common_1.Post)('toggle/:bookId'),
    (0, swagger_1.ApiOperation)({
        summary: 'Kitobga like/unlike toggle (token talab qilinadi)',
        description: "Agar foydalanuvchi avval like qilgan bo'lsa — o'chiradi, " +
            "aks holda — like qo'shadi.",
    }),
    __param(0, (0, common_1.Param)('bookId', common_1.ParseIntPipe)),
    __param(1, (0, current_user_decorator_1.CurrentUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Object]),
    __metadata("design:returntype", void 0)
], BookLikePublicController.prototype, "toggle", null);
exports.BookLikePublicController = BookLikePublicController = __decorate([
    (0, swagger_1.ApiTags)('Public / Book Likes'),
    (0, common_1.Controller)('public/book-likes'),
    __metadata("design:paramtypes", [bookLike_public_service_1.BookLikePublicService])
], BookLikePublicController);
//# sourceMappingURL=bookLike.public.controller.js.map