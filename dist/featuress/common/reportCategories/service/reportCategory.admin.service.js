"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReportCategoryAdminService = void 0;
const common_1 = require("@nestjs/common");
const class_transformer_1 = require("class-transformer");
const reportCategory_entity_1 = require("../entities/reportCategory.entity");
const reportCategory_list_admin_dto_1 = require("../dtos/admin/reportCategory.list.admin.dto");
const reportCategory_detail_admin_dto_1 = require("../dtos/admin/reportCategory.detail.admin.dto");
let ReportCategoryAdminService = class ReportCategoryAdminService {
    async getAll() {
        const items = await reportCategory_entity_1.ReportCategory.find();
        return (0, class_transformer_1.plainToInstance)(reportCategory_list_admin_dto_1.ReportCategoryListAdminDto, items, {
            excludeExtraneousValues: true,
        });
    }
    async getOne(id) {
        const item = await reportCategory_entity_1.ReportCategory.findOneBy({ id });
        if (!item)
            throw new common_1.NotFoundException('ReportCategory with given id not found');
        return (0, class_transformer_1.plainToInstance)(reportCategory_detail_admin_dto_1.ReportCategoryDetailAdminDto, item, {
            excludeExtraneousValues: true,
        });
    }
    async create(payload) {
        const item = reportCategory_entity_1.ReportCategory.create(payload);
        return reportCategory_entity_1.ReportCategory.save(item);
    }
    async update(id, payload) {
        const item = await reportCategory_entity_1.ReportCategory.findOneBy({ id });
        if (!item)
            throw new common_1.NotFoundException('ReportCategory with given id not found');
        Object.assign(item, Object.fromEntries(Object.entries(payload).filter(([, v]) => v !== undefined)));
        return reportCategory_entity_1.ReportCategory.save(item);
    }
    async delete(id) {
        const item = await reportCategory_entity_1.ReportCategory.findOneBy({ id });
        if (!item)
            throw new common_1.NotFoundException('ReportCategory with given id not found');
        await reportCategory_entity_1.ReportCategory.remove(item);
    }
};
exports.ReportCategoryAdminService = ReportCategoryAdminService;
exports.ReportCategoryAdminService = ReportCategoryAdminService = __decorate([
    (0, common_1.Injectable)()
], ReportCategoryAdminService);
//# sourceMappingURL=reportCategory.admin.service.js.map