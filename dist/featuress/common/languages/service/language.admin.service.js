"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LanguageAdminService = void 0;
const common_1 = require("@nestjs/common");
const class_transformer_1 = require("class-transformer");
const language_entity_1 = require("../entities/language.entity");
const language_list_admin_dto_1 = require("../dtos/admin/language.list.admin.dto");
const language_detail_admin_dto_1 = require("../dtos/admin/language.detail.admin.dto");
let LanguageAdminService = class LanguageAdminService {
    async getAll() {
        const items = await language_entity_1.Language.find();
        return (0, class_transformer_1.plainToInstance)(language_list_admin_dto_1.LanguageListAdminDto, items, {
            excludeExtraneousValues: true,
        });
    }
    async getOne(id) {
        const item = await language_entity_1.Language.findOneBy({ id });
        if (!item)
            throw new common_1.NotFoundException('Language with given id not found');
        return (0, class_transformer_1.plainToInstance)(language_detail_admin_dto_1.LanguageDetailAdminDto, item, {
            excludeExtraneousValues: true,
        });
    }
    async create(payload) {
        const item = language_entity_1.Language.create(payload);
        return language_entity_1.Language.save(item);
    }
    async update(id, payload) {
        const item = await language_entity_1.Language.findOneBy({ id });
        if (!item)
            throw new common_1.NotFoundException('Language with given id not found');
        Object.assign(item, Object.fromEntries(Object.entries(payload).filter(([, v]) => v !== undefined)));
        return language_entity_1.Language.save(item);
    }
    async delete(id) {
        const item = await language_entity_1.Language.findOneBy({ id });
        if (!item)
            throw new common_1.NotFoundException('Language with given id not found');
        await language_entity_1.Language.remove(item);
    }
};
exports.LanguageAdminService = LanguageAdminService;
exports.LanguageAdminService = LanguageAdminService = __decorate([
    (0, common_1.Injectable)()
], LanguageAdminService);
//# sourceMappingURL=language.admin.service.js.map