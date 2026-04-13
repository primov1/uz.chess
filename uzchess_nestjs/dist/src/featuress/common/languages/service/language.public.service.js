"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LanguagePublicService = void 0;
const common_1 = require("@nestjs/common");
const class_transformer_1 = require("class-transformer");
const language_entity_1 = require("../entities/language.entity");
const language_list_public_dto_1 = require("../dtos/public/language.list.public.dto");
const language_detail_public_dto_1 = require("../dtos/public/language.detail.public.dto");
let LanguagePublicService = class LanguagePublicService {
    async getAll() {
        const items = await language_entity_1.Language.find();
        return (0, class_transformer_1.plainToInstance)(language_list_public_dto_1.LanguageListPublicDto, items, {
            excludeExtraneousValues: true,
        });
    }
    async getOne(id) {
        const item = await language_entity_1.Language.findOneBy({ id });
        if (!item)
            throw new common_1.NotFoundException('Language with given id not found');
        return (0, class_transformer_1.plainToInstance)(language_detail_public_dto_1.LanguageDetailPublicDto, item, {
            excludeExtraneousValues: true,
        });
    }
};
exports.LanguagePublicService = LanguagePublicService;
exports.LanguagePublicService = LanguagePublicService = __decorate([
    (0, common_1.Injectable)()
], LanguagePublicService);
//# sourceMappingURL=language.public.service.js.map