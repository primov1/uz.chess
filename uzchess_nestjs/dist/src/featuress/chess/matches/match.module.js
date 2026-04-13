"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MatchModule = void 0;
const common_1 = require("@nestjs/common");
const match_admin_controller_1 = require("./controllers/match.admin.controller");
const match_public_controller_1 = require("./controllers/match.public.controller");
const match_admin_service_1 = require("./service/match.admin.service");
const match_public_service_1 = require("./service/match.public.service");
let MatchModule = class MatchModule {
};
exports.MatchModule = MatchModule;
exports.MatchModule = MatchModule = __decorate([
    (0, common_1.Module)({
        controllers: [match_admin_controller_1.MatchAdminController, match_public_controller_1.MatchPublicController],
        providers: [match_admin_service_1.MatchAdminService, match_public_service_1.MatchPublicService],
    })
], MatchModule);
//# sourceMappingURL=match.module.js.map