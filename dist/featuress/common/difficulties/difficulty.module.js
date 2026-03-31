"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DifficultyModule = void 0;
const common_1 = require("@nestjs/common");
const difficulty_admin_controller_1 = require("./controllers/difficulty.admin.controller");
const difficulty_public_controller_1 = require("./controllers/difficulty.public.controller");
const difficulty_admin_service_1 = require("./service/difficulty.admin.service");
const difficulty_public_service_1 = require("./service/difficulty.public.service");
let DifficultyModule = class DifficultyModule {
};
exports.DifficultyModule = DifficultyModule;
exports.DifficultyModule = DifficultyModule = __decorate([
    (0, common_1.Module)({
        controllers: [difficulty_admin_controller_1.DifficultyAdminController, difficulty_public_controller_1.DifficultyPublicController],
        providers: [difficulty_admin_service_1.DifficultyAdminService, difficulty_public_service_1.DifficultyPublicService],
    })
], DifficultyModule);
//# sourceMappingURL=difficulty.module.js.map