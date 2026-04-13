"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BookLikePublicService = void 0;
const common_1 = require("@nestjs/common");
const class_transformer_1 = require("class-transformer");
const bookLike_entity_1 = require("../entities/bookLike.entity");
const book_entity_1 = require("../../books/entities/book.entity");
const bookLike_list_public_dto_1 = require("../dtos/public/bookLike.list.public.dto");
const bookLike_detail_public_dto_1 = require("../dtos/public/bookLike.detail.public.dto");
let BookLikePublicService = class BookLikePublicService {
    async getAll() {
        const items = await bookLike_entity_1.BookLike.find();
        return (0, class_transformer_1.plainToInstance)(bookLike_list_public_dto_1.BookLikeListPublicDto, items, {
            excludeExtraneousValues: true,
        });
    }
    async getOne(id) {
        const item = await bookLike_entity_1.BookLike.findOneBy({ id });
        if (!item)
            throw new common_1.NotFoundException('BookLike with given id not found');
        return (0, class_transformer_1.plainToInstance)(bookLike_detail_public_dto_1.BookLikeDetailPublicDto, item, {
            excludeExtraneousValues: true,
        });
    }
    async toggle(bookId, userId) {
        const book = await book_entity_1.Book.findOneBy({ id: bookId });
        if (!book)
            throw new common_1.NotFoundException(`Kitob topilmadi (id: ${bookId})`);
        const existing = await bookLike_entity_1.BookLike.findOne({ where: { bookId, userId } });
        if (existing) {
            await bookLike_entity_1.BookLike.remove(existing);
            book.likesCount = Math.max(0, (book.likesCount || 0) - 1);
            await book.save();
            return {
                liked: false,
                likesCount: book.likesCount,
                message: 'Kitob likedan olib tashlandi',
            };
        }
        const like = bookLike_entity_1.BookLike.create({ bookId, userId });
        await like.save();
        book.likesCount = (book.likesCount || 0) + 1;
        await book.save();
        return {
            liked: true,
            likesCount: book.likesCount,
            message: 'Kitob like qilindi',
            data: (0, class_transformer_1.plainToInstance)(bookLike_detail_public_dto_1.BookLikeDetailPublicDto, like, {
                excludeExtraneousValues: true,
            }),
        };
    }
    async getMyLikes(userId) {
        const items = await bookLike_entity_1.BookLike.find({ where: { userId } });
        return (0, class_transformer_1.plainToInstance)(bookLike_list_public_dto_1.BookLikeListPublicDto, items, {
            excludeExtraneousValues: true,
        });
    }
};
exports.BookLikePublicService = BookLikePublicService;
exports.BookLikePublicService = BookLikePublicService = __decorate([
    (0, common_1.Injectable)()
], BookLikePublicService);
//# sourceMappingURL=bookLike.public.service.js.map