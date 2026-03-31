"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DifficultyPublicService = void 0;
const common_1 = require("@nestjs/common");
const class_transformer_1 = require("class-transformer");
const difficulty_entity_1 = require("../entities/difficulty.entity");
const difficulty_list_public_dto_1 = require("../dtos/public/difficulty.list.public.dto");
const difficulty_detail_public_dto_1 = require("../dtos/public/difficulty.detail.public.dto");
let DifficultyPublicService = class DifficultyPublicService {
    async getAll() {
        const items = await difficulty_entity_1.Difficulty.find();
        return (0, class_transformer_1.plainToInstance)(difficulty_list_public_dto_1.DifficultyListPublicDto, items, {
            excludeExtraneousValues: true,
        });
    }
    async getOne(id) {
        const item = await difficulty_entity_1.Difficulty.findOneBy({ id });
        if (!item)
            throw new common_1.NotFoundException('Difficulty with given id not found');
        return (0, class_transformer_1.plainToInstance)(difficulty_detail_public_dto_1.DifficultyDetailPublicDto, item, {
            excludeExtraneousValues: true,
        });
    }
};
exports.DifficultyPublicService = DifficultyPublicService;
exports.DifficultyPublicService = DifficultyPublicService = __decorate([
    (0, common_1.Injectable)()
], DifficultyPublicService);
//# sourceMappingURL=difficulty.public.service.js.map