"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LanguageModule = void 0;
const common_1 = require("@nestjs/common");
const language_admin_controller_1 = require("./controllers/language.admin.controller");
const language_public_controller_1 = require("./controllers/language.public.controller");
const language_admin_service_1 = require("./service/language.admin.service");
const language_public_service_1 = require("./service/language.public.service");
let LanguageModule = class LanguageModule {
};
exports.LanguageModule = LanguageModule;
exports.LanguageModule = LanguageModule = __decorate([
    (0, common_1.Module)({
        controllers: [language_admin_controller_1.LanguageAdminController, language_public_controller_1.LanguagePublicController],
        providers: [language_admin_service_1.LanguageAdminService, language_public_service_1.LanguagePublicService],
    })
], LanguageModule);
//# sourceMappingURL=language.module.js.map