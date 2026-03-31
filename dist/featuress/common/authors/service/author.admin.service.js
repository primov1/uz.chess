"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthorAdminService = void 0;
const common_1 = require("@nestjs/common");
const class_transformer_1 = require("class-transformer");
const author_entity_1 = require("../entities/author.entity");
const author_list_admin_dto_1 = require("../dtos/admin/author.list.admin.dto");
const author_detail_admin_dto_1 = require("../dtos/admin/author.detail.admin.dto");
let AuthorAdminService = class AuthorAdminService {
    async getAll() {
        const items = await author_entity_1.Author.find();
        return (0, class_transformer_1.plainToInstance)(author_list_admin_dto_1.AuthorListAdminDto, items, {
            excludeExtraneousValues: true,
        });
    }
    async getOne(id) {
        const item = await author_entity_1.Author.findOneBy({ id });
        if (!item)
            throw new common_1.NotFoundException('Author with given id not found');
        return (0, class_transformer_1.plainToInstance)(author_detail_admin_dto_1.AuthorDetailAdminDto, item, {
            excludeExtraneousValues: true,
        });
    }
    async create(payload) {
        const item = author_entity_1.Author.create(payload);
        return author_entity_1.Author.save(item);
    }
    async update(id, payload) {
        const item = await author_entity_1.Author.findOneBy({ id });
        if (!item)
            throw new common_1.NotFoundException('Author with given id not found');
        Object.assign(item, Object.fromEntries(Object.entries(payload).filter(([, v]) => v !== undefined)));
        return author_entity_1.Author.save(item);
    }
    async delete(id) {
        const item = await author_entity_1.Author.findOneBy({ id });
        if (!item)
            throw new common_1.NotFoundException('Author with given id not found');
        await author_entity_1.Author.remove(item);
    }
};
exports.AuthorAdminService = AuthorAdminService;
exports.AuthorAdminService = AuthorAdminService = __decorate([
    (0, common_1.Injectable)()
], AuthorAdminService);
//# sourceMappingURL=author.admin.service.js.map