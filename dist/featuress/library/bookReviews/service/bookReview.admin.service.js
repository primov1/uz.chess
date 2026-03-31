"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BookReviewAdminService = void 0;
const common_1 = require("@nestjs/common");
const class_transformer_1 = require("class-transformer");
const bookReview_entity_1 = require("../entities/bookReview.entity");
const bookReview_list_admin_dto_1 = require("../dtos/admin/bookReview.list.admin.dto");
const bookReview_detail_admin_dto_1 = require("../dtos/admin/bookReview.detail.admin.dto");
let BookReviewAdminService = class BookReviewAdminService {
    async getAll() {
        const items = await bookReview_entity_1.BookReview.find();
        return (0, class_transformer_1.plainToInstance)(bookReview_list_admin_dto_1.BookReviewListAdminDto, items, {
            excludeExtraneousValues: true,
        });
    }
    async getOne(id) {
        const item = await bookReview_entity_1.BookReview.findOneBy({ id });
        if (!item)
            throw new common_1.NotFoundException('BookReview with given id not found');
        return (0, class_transformer_1.plainToInstance)(bookReview_detail_admin_dto_1.BookReviewDetailAdminDto, item, {
            excludeExtraneousValues: true,
        });
    }
    async create(payload) {
        const item = bookReview_entity_1.BookReview.create(payload);
        return bookReview_entity_1.BookReview.save(item);
    }
    async update(id, payload) {
        const item = await bookReview_entity_1.BookReview.findOneBy({ id });
        if (!item)
            throw new common_1.NotFoundException('BookReview with given id not found');
        Object.assign(item, Object.fromEntries(Object.entries(payload).filter(([, v]) => v !== undefined)));
        return bookReview_entity_1.BookReview.save(item);
    }
    async delete(id) {
        const item = await bookReview_entity_1.BookReview.findOneBy({ id });
        if (!item)
            throw new common_1.NotFoundException('BookReview with given id not found');
        await bookReview_entity_1.BookReview.remove(item);
    }
};
exports.BookReviewAdminService = BookReviewAdminService;
exports.BookReviewAdminService = BookReviewAdminService = __decorate([
    (0, common_1.Injectable)()
], BookReviewAdminService);
//# sourceMappingURL=bookReview.admin.service.js.map