"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BookLikeAdminService = void 0;
const common_1 = require("@nestjs/common");
const class_transformer_1 = require("class-transformer");
const bookLike_entity_1 = require("../entities/bookLike.entity");
const bookLike_list_admin_dto_1 = require("../dtos/admin/bookLike.list.admin.dto");
const bookLike_detail_admin_dto_1 = require("../dtos/admin/bookLike.detail.admin.dto");
let BookLikeAdminService = class BookLikeAdminService {
    async getAll() {
        const items = await bookLike_entity_1.BookLike.find();
        return (0, class_transformer_1.plainToInstance)(bookLike_list_admin_dto_1.BookLikeListAdminDto, items, {
            excludeExtraneousValues: true,
        });
    }
    async getOne(id) {
        const item = await bookLike_entity_1.BookLike.findOneBy({ id });
        if (!item)
            throw new common_1.NotFoundException('BookLike with given id not found');
        return (0, class_transformer_1.plainToInstance)(bookLike_detail_admin_dto_1.BookLikeDetailAdminDto, item, {
            excludeExtraneousValues: true,
        });
    }
    async create(payload) {
        const item = bookLike_entity_1.BookLike.create(payload);
        return bookLike_entity_1.BookLike.save(item);
    }
    async update(id, payload) {
        const item = await bookLike_entity_1.BookLike.findOneBy({ id });
        if (!item)
            throw new common_1.NotFoundException('BookLike with given id not found');
        Object.assign(item, Object.fromEntries(Object.entries(payload).filter(([, v]) => v !== undefined)));
        return bookLike_entity_1.BookLike.save(item);
    }
    async delete(id) {
        const item = await bookLike_entity_1.BookLike.findOneBy({ id });
        if (!item)
            throw new common_1.NotFoundException('BookLike with given id not found');
        await bookLike_entity_1.BookLike.remove(item);
    }
};
exports.BookLikeAdminService = BookLikeAdminService;
exports.BookLikeAdminService = BookLikeAdminService = __decorate([
    (0, common_1.Injectable)()
], BookLikeAdminService);
//# sourceMappingURL=bookLike.admin.service.js.map