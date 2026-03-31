"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthorPublicService = void 0;
const common_1 = require("@nestjs/common");
const class_transformer_1 = require("class-transformer");
const author_entity_1 = require("../entities/author.entity");
const author_list_public_dto_1 = require("../dtos/public/author.list.public.dto");
const author_detail_public_dto_1 = require("../dtos/public/author.detail.public.dto");
let AuthorPublicService = class AuthorPublicService {
    async getAll() {
        const items = await author_entity_1.Author.find();
        return (0, class_transformer_1.plainToInstance)(author_list_public_dto_1.AuthorListPublicDto, items, {
            excludeExtraneousValues: true,
        });
    }
    async getOne(id) {
        const item = await author_entity_1.Author.findOneBy({ id });
        if (!item)
            throw new common_1.NotFoundException('Author with given id not found');
        return (0, class_transformer_1.plainToInstance)(author_detail_public_dto_1.AuthorDetailPublicDto, item, {
            excludeExtraneousValues: true,
        });
    }
};
exports.AuthorPublicService = AuthorPublicService;
exports.AuthorPublicService = AuthorPublicService = __decorate([
    (0, common_1.Injectable)()
], AuthorPublicService);
//# sourceMappingURL=author.public.service.js.map