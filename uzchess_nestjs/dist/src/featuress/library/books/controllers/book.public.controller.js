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
exports.BookPublicController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const book_public_service_1 = require("../service/book.public.service");
const book_list_public_dto_1 = require("../dtos/public/book.list.public.dto");
const book_detail_public_dto_1 = require("../dtos/public/book.detail.public.dto");
let BookPublicController = class BookPublicController {
    bookPublicService;
    constructor(bookPublicService) {
        this.bookPublicService = bookPublicService;
    }
    getAll() {
        return this.bookPublicService.getAll();
    }
    getOne(id) {
        return this.bookPublicService.getOne(id);
    }
};
exports.BookPublicController = BookPublicController;
__decorate([
    (0, common_1.Get)(),
    (0, swagger_1.ApiOperation)({ summary: 'Get all books' }),
    (0, swagger_1.ApiOkResponse)({ type: () => book_list_public_dto_1.BookListPublicDto, isArray: true }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], BookPublicController.prototype, "getAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Get book by id' }),
    (0, swagger_1.ApiOkResponse)({ type: () => book_detail_public_dto_1.BookDetailPublicDto }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], BookPublicController.prototype, "getOne", null);
exports.BookPublicController = BookPublicController = __decorate([
    (0, swagger_1.ApiTags)('Public / Books'),
    (0, common_1.Controller)('public/books'),
    __metadata("design:paramtypes", [book_public_service_1.BookPublicService])
], BookPublicController);
//# sourceMappingURL=book.public.controller.js.map