"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CountryModule = void 0;
const common_1 = require("@nestjs/common");
const country_admin_controller_1 = require("./controllers/country.admin.controller");
const country_public_controller_1 = require("./controllers/country.public.controller");
const country_admin_service_1 = require("./service/country.admin.service");
const country_public_service_1 = require("./service/country.public.service");
let CountryModule = class CountryModule {
};
exports.CountryModule = CountryModule;
exports.CountryModule = CountryModule = __decorate([
    (0, common_1.Module)({
        controllers: [country_admin_controller_1.CountryAdminController, country_public_controller_1.CountryPublicController],
        providers: [country_admin_service_1.CountryAdminService, country_public_service_1.CountryPublicService],
    })
], CountryModule);
//# sourceMappingURL=country.module.js.map