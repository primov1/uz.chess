"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BookPublicService = void 0;
const common_1 = require("@nestjs/common");
const class_transformer_1 = require("class-transformer");
const book_entity_1 = require("../entities/book.entity");
const book_list_public_dto_1 = require("../dtos/public/book.list.public.dto");
const book_detail_public_dto_1 = require("../dtos/public/book.detail.public.dto");
let BookPublicService = class BookPublicService {
    async getAll() {
        const books = await book_entity_1.Book.find();
        return (0, class_transformer_1.plainToInstance)(book_list_public_dto_1.BookListPublicDto, books, {
            excludeExtraneousValues: true,
        });
    }
    async getOne(id) {
        const book = await book_entity_1.Book.findOneBy({ id });
        if (!book)
            throw new common_1.NotFoundException('Book with given id not found');
        return (0, class_transformer_1.plainToInstance)(book_detail_public_dto_1.BookDetailPublicDto, book, {
            excludeExtraneousValues: true,
        });
    }
};
exports.BookPublicService = BookPublicService;
exports.BookPublicService = BookPublicService = __decorate([
    (0, common_1.Injectable)()
], BookPublicService);
//# sourceMappingURL=book.public.service.js.map