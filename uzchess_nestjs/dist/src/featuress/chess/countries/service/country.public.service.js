"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CountryPublicService = void 0;
const common_1 = require("@nestjs/common");
const class_transformer_1 = require("class-transformer");
const country_entity_1 = require("../entities/country.entity");
const country_list_public_dto_1 = require("../dtos/public/country.list.public.dto");
const country_detail_public_dto_1 = require("../dtos/public/country.detail.public.dto");
let CountryPublicService = class CountryPublicService {
    async getAll() {
        const items = await country_entity_1.Country.find();
        return (0, class_transformer_1.plainToInstance)(country_list_public_dto_1.CountryListPublicDto, items, {
            excludeExtraneousValues: true,
        });
    }
    async getOne(id) {
        const item = await country_entity_1.Country.findOneBy({ id });
        if (!item)
            throw new common_1.NotFoundException('Country with given id not found');
        return (0, class_transformer_1.plainToInstance)(country_detail_public_dto_1.CountryDetailPublicDto, item, {
            excludeExtraneousValues: true,
        });
    }
};
exports.CountryPublicService = CountryPublicService;
exports.CountryPublicService = CountryPublicService = __decorate([
    (0, common_1.Injectable)()
], CountryPublicService);
//# sourceMappingURL=country.public.service.js.map