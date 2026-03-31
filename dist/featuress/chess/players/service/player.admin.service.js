"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PlayerAdminService = void 0;
const common_1 = require("@nestjs/common");
const class_transformer_1 = require("class-transformer");
const player_entity_1 = require("../entities/player.entity");
const player_list_admin_dto_1 = require("../dtos/admin/player.list.admin.dto");
const player_detail_admin_dto_1 = require("../dtos/admin/player.detail.admin.dto");
let PlayerAdminService = class PlayerAdminService {
    async getAll() {
        const players = await player_entity_1.Player.find();
        return (0, class_transformer_1.plainToInstance)(player_list_admin_dto_1.PlayerListAdminDto, players, { excludeExtraneousValues: true });
    }
    async getOne(id) {
        const player = await player_entity_1.Player.findOneBy({ id });
        if (!player)
            throw new common_1.NotFoundException('Player with given id not found');
        return (0, class_transformer_1.plainToInstance)(player_detail_admin_dto_1.PlayerDetailAdminDto, player, { excludeExtraneousValues: true });
    }
    async create(payload, file) {
        const player = player_entity_1.Player.create(payload);
        if (file)
            player.image = `/uploads/${file.filename}`;
        return player_entity_1.Player.save(player);
    }
    async update(id, payload, file) {
        const player = await player_entity_1.Player.findOneBy({ id });
        if (!player)
            throw new common_1.NotFoundException('Player with given id not found');
        Object.assign(player, Object.fromEntries(Object.entries(payload).filter(([, v]) => v !== undefined)));
        if (file)
            player.image = `/uploads/${file.filename}`;
        return player_entity_1.Player.save(player);
    }
    async delete(id) {
        const player = await player_entity_1.Player.findOneBy({ id });
        if (!player)
            throw new common_1.NotFoundException('Player with given id not found');
        await player_entity_1.Player.remove(player);
    }
};
exports.PlayerAdminService = PlayerAdminService;
exports.PlayerAdminService = PlayerAdminService = __decorate([
    (0, common_1.Injectable)()
], PlayerAdminService);
//# sourceMappingURL=player.admin.service.js.map