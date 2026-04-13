"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BookCategoryAdminService = void 0;
const common_1 = require("@nestjs/common");
const class_transformer_1 = require("class-transformer");
const bookCategory_entity_1 = require("../entities/bookCategory.entity");
const bookCategory_list_admin_dto_1 = require("../dtos/admin/bookCategory.list.admin.dto");
const bookCategory_detail_admin_dto_1 = require("../dtos/admin/bookCategory.detail.admin.dto");
let BookCategoryAdminService = class BookCategoryAdminService {
    async getAll() {
        const items = await bookCategory_entity_1.BookCategory.find();
        return (0, class_transformer_1.plainToInstance)(bookCategory_list_admin_dto_1.BookCategoryListAdminDto, items, {
            excludeExtraneousValues: true,
        });
    }
    async getOne(id) {
        const item = await bookCategory_entity_1.BookCategory.findOneBy({ id });
        if (!item)
            throw new common_1.NotFoundException('BookCategory with given id not found');
        return (0, class_transformer_1.plainToInstance)(bookCategory_detail_admin_dto_1.BookCategoryDetailAdminDto, item, {
            excludeExtraneousValues: true,
        });
    }
    async create(payload) {
        const item = bookCategory_entity_1.BookCategory.create(payload);
        return bookCategory_entity_1.BookCategory.save(item);
    }
    async update(id, payload) {
        const item = await bookCategory_entity_1.BookCategory.findOneBy({ id });
        if (!item)
            throw new common_1.NotFoundException('BookCategory with given id not found');
        Object.assign(item, Object.fromEntries(Object.entries(payload).filter(([, v]) => v !== undefined)));
        return bookCategory_entity_1.BookCategory.save(item);
    }
    async delete(id) {
        const item = await bookCategory_entity_1.BookCategory.findOneBy({ id });
        if (!item)
            throw new common_1.NotFoundException('BookCategory with given id not found');
        await bookCategory_entity_1.BookCategory.remove(item);
    }
};
exports.BookCategoryAdminService = BookCategoryAdminService;
exports.BookCategoryAdminService = BookCategoryAdminService = __decorate([
    (0, common_1.Injectable)()
], BookCategoryAdminService);
//# sourceMappingURL=bookCategory.admin.service.js.map