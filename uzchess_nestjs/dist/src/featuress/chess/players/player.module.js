"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PlayerModule = void 0;
const common_1 = require("@nestjs/common");
const player_admin_controller_1 = require("./controllers/player.admin.controller");
const player_public_controller_1 = require("./controllers/player.public.controller");
const player_admin_service_1 = require("./service/player.admin.service");
const player_public_service_1 = require("./service/player.public.service");
let PlayerModule = class PlayerModule {
};
exports.PlayerModule = PlayerModule;
exports.PlayerModule = PlayerModule = __decorate([
    (0, common_1.Module)({
        controllers: [player_admin_controller_1.PlayerAdminController, player_public_controller_1.PlayerPublicController],
        providers: [player_admin_service_1.PlayerAdminService, player_public_service_1.PlayerPublicService],
    })
], PlayerModule);
//# sourceMappingURL=player.module.js.map