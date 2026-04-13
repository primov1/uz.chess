"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BookReviewPublicService = void 0;
const common_1 = require("@nestjs/common");
const class_transformer_1 = require("class-transformer");
const bookReview_entity_1 = require("../entities/bookReview.entity");
const bookReview_list_public_dto_1 = require("../dtos/public/bookReview.list.public.dto");
const bookReview_detail_public_dto_1 = require("../dtos/public/bookReview.detail.public.dto");
let BookReviewPublicService = class BookReviewPublicService {
    async getAll() {
        const items = await bookReview_entity_1.BookReview.find();
        return (0, class_transformer_1.plainToInstance)(bookReview_list_public_dto_1.BookReviewListPublicDto, items, {
            excludeExtraneousValues: true,
        });
    }
    async getOne(id) {
        const item = await bookReview_entity_1.BookReview.findOneBy({ id });
        if (!item)
            throw new common_1.NotFoundException('BookReview with given id not found');
        return (0, class_transformer_1.plainToInstance)(bookReview_detail_public_dto_1.BookReviewDetailPublicDto, item, {
            excludeExtraneousValues: true,
        });
    }
};
exports.BookReviewPublicService = BookReviewPublicService;
exports.BookReviewPublicService = BookReviewPublicService = __decorate([
    (0, common_1.Injectable)()
], BookReviewPublicService);
//# sourceMappingURL=bookReview.public.service.js.map