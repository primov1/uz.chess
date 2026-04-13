"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CountryAdminService = void 0;
const common_1 = require("@nestjs/common");
const class_transformer_1 = require("class-transformer");
const country_entity_1 = require("../entities/country.entity");
const country_list_admin_dto_1 = require("../dtos/admin/country.list.admin.dto");
const country_detail_admin_dto_1 = require("../dtos/admin/country.detail.admin.dto");
let CountryAdminService = class CountryAdminService {
    async getAll() {
        const items = await country_entity_1.Country.find();
        return (0, class_transformer_1.plainToInstance)(country_list_admin_dto_1.CountryListAdminDto, items, {
            excludeExtraneousValues: true,
        });
    }
    async getOne(id) {
        const item = await country_entity_1.Country.findOneBy({ id });
        if (!item)
            throw new common_1.NotFoundException('Country with given id not found');
        return (0, class_transformer_1.plainToInstance)(country_detail_admin_dto_1.CountryDetailAdminDto, item, {
            excludeExtraneousValues: true,
        });
    }
    async create(payload) {
        const item = country_entity_1.Country.create(payload);
        return country_entity_1.Country.save(item);
    }
    async update(id, payload) {
        const item = await country_entity_1.Country.findOneBy({ id });
        if (!item)
            throw new common_1.NotFoundException('Country with given id not found');
        Object.assign(item, Object.fromEntries(Object.entries(payload).filter(([, v]) => v !== undefined)));
        return country_entity_1.Country.save(item);
    }
    async delete(id) {
        const item = await country_entity_1.Country.findOneBy({ id });
        if (!item)
            throw new common_1.NotFoundException('Country with given id not found');
        await country_entity_1.Country.remove(item);
    }
};
exports.CountryAdminService = CountryAdminService;
exports.CountryAdminService = CountryAdminService = __decorate([
    (0, common_1.Injectable)()
], CountryAdminService);
//# sourceMappingURL=country.admin.service.js.map