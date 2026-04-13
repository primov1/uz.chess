"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MatchPublicService = void 0;
const common_1 = require("@nestjs/common");
const class_transformer_1 = require("class-transformer");
const match_entity_1 = require("../entities/match.entity");
const match_list_public_dto_1 = require("../dtos/public/match.list.public.dto");
const match_detail_public_dto_1 = require("../dtos/public/match.detail.public.dto");
let MatchPublicService = class MatchPublicService {
    async getAll() {
        const matches = await match_entity_1.Match.find();
        return (0, class_transformer_1.plainToInstance)(match_list_public_dto_1.MatchListPublicDto, matches, {
            excludeExtraneousValues: true,
        });
    }
    async getOne(id) {
        const match = await match_entity_1.Match.findOneBy({ id });
        if (!match)
            throw new common_1.NotFoundException('Match with given id not found');
        return (0, class_transformer_1.plainToInstance)(match_detail_public_dto_1.MatchDetailPublicDto, match, {
            excludeExtraneousValues: true,
        });
    }
};
exports.MatchPublicService = MatchPublicService;
exports.MatchPublicService = MatchPublicService = __decorate([
    (0, common_1.Injectable)()
], MatchPublicService);
//# sourceMappingURL=match.public.service.js.map