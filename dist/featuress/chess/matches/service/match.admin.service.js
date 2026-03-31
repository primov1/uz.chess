"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MatchAdminService = void 0;
const common_1 = require("@nestjs/common");
const class_transformer_1 = require("class-transformer");
const match_entity_1 = require("../entities/match.entity");
const match_list_admin_dto_1 = require("../dtos/admin/match.list.admin.dto");
const match_detail_admin_dto_1 = require("../dtos/admin/match.detail.admin.dto");
let MatchAdminService = class MatchAdminService {
    async getAll() {
        const matches = await match_entity_1.Match.find();
        return (0, class_transformer_1.plainToInstance)(match_list_admin_dto_1.MatchListAdminDto, matches, { excludeExtraneousValues: true });
    }
    async getOne(id) {
        const match = await match_entity_1.Match.findOneBy({ id });
        if (!match)
            throw new common_1.NotFoundException('Match with given id not found');
        return (0, class_transformer_1.plainToInstance)(match_detail_admin_dto_1.MatchDetailAdminDto, match, { excludeExtraneousValues: true });
    }
    async create(payload) {
        const match = match_entity_1.Match.create(payload);
        return match_entity_1.Match.save(match);
    }
    async update(id, payload) {
        const match = await match_entity_1.Match.findOneBy({ id });
        if (!match)
            throw new common_1.NotFoundException('Match with given id not found');
        Object.assign(match, Object.fromEntries(Object.entries(payload).filter(([, v]) => v !== undefined)));
        return match_entity_1.Match.save(match);
    }
    async delete(id) {
        const match = await match_entity_1.Match.findOneBy({ id });
        if (!match)
            throw new common_1.NotFoundException('Match with given id not found');
        await match_entity_1.Match.remove(match);
    }
};
exports.MatchAdminService = MatchAdminService;
exports.MatchAdminService = MatchAdminService = __decorate([
    (0, common_1.Injectable)()
], MatchAdminService);
//# sourceMappingURL=match.admin.service.js.map