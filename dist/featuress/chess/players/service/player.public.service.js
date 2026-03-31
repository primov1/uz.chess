"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PlayerPublicService = void 0;
const common_1 = require("@nestjs/common");
const class_transformer_1 = require("class-transformer");
const player_entity_1 = require("../entities/player.entity");
const player_list_public_dto_1 = require("../dtos/public/player.list.public.dto");
const player_detail_public_dto_1 = require("../dtos/public/player.detail.public.dto");
let PlayerPublicService = class PlayerPublicService {
    async getAll() {
        const players = await player_entity_1.Player.find();
        return (0, class_transformer_1.plainToInstance)(player_list_public_dto_1.PlayerListPublicDto, players, { excludeExtraneousValues: true });
    }
    async getOne(id) {
        const player = await player_entity_1.Player.findOneBy({ id });
        if (!player)
            throw new common_1.NotFoundException('Player with given id not found');
        return (0, class_transformer_1.plainToInstance)(player_detail_public_dto_1.PlayerDetailPublicDto, player, { excludeExtraneousValues: true });
    }
};
exports.PlayerPublicService = PlayerPublicService;
exports.PlayerPublicService = PlayerPublicService = __decorate([
    (0, common_1.Injectable)()
], PlayerPublicService);
//# sourceMappingURL=player.public.service.js.map