"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BookCategoryPublicService = void 0;
const common_1 = require("@nestjs/common");
const class_transformer_1 = require("class-transformer");
const bookCategory_entity_1 = require("../entities/bookCategory.entity");
const bookCategory_list_public_dto_1 = require("../dtos/public/bookCategory.list.public.dto");
const bookCategory_detail_public_dto_1 = require("../dtos/public/bookCategory.detail.public.dto");
let BookCategoryPublicService = class BookCategoryPublicService {
    async getAll() {
        const items = await bookCategory_entity_1.BookCategory.find();
        return (0, class_transformer_1.plainToInstance)(bookCategory_list_public_dto_1.BookCategoryListPublicDto, items, {
            excludeExtraneousValues: true,
        });
    }
    async getOne(id) {
        const item = await bookCategory_entity_1.BookCategory.findOneBy({ id });
        if (!item)
            throw new common_1.NotFoundException('BookCategory with given id not found');
        return (0, class_transformer_1.plainToInstance)(bookCategory_detail_public_dto_1.BookCategoryDetailPublicDto, item, {
            excludeExtraneousValues: true,
        });
    }
};
exports.BookCategoryPublicService = BookCategoryPublicService;
exports.BookCategoryPublicService = BookCategoryPublicService = __decorate([
    (0, common_1.Injectable)()
], BookCategoryPublicService);
//# sourceMappingURL=bookCategory.public.service.js.map