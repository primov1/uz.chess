"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReportPublicService = void 0;
const common_1 = require("@nestjs/common");
const class_transformer_1 = require("class-transformer");
const report_entity_1 = require("../entities/report.entity");
const report_list_public_dto_1 = require("../dtos/public/report.list.public.dto");
const report_detail_public_dto_1 = require("../dtos/public/report.detail.public.dto");
let ReportPublicService = class ReportPublicService {
    async getAll() {
        const items = await report_entity_1.Report.find();
        return (0, class_transformer_1.plainToInstance)(report_list_public_dto_1.ReportListPublicDto, items, {
            excludeExtraneousValues: true,
        });
    }
    async getOne(id) {
        const item = await report_entity_1.Report.findOneBy({ id });
        if (!item)
            throw new common_1.NotFoundException('Report with given id not found');
        return (0, class_transformer_1.plainToInstance)(report_detail_public_dto_1.ReportDetailPublicDto, item, {
            excludeExtraneousValues: true,
        });
    }
};
exports.ReportPublicService = ReportPublicService;
exports.ReportPublicService = ReportPublicService = __decorate([
    (0, common_1.Injectable)()
], ReportPublicService);
//# sourceMappingURL=report.public.service.js.map