"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReportCategoryPublicService = void 0;
const common_1 = require("@nestjs/common");
const class_transformer_1 = require("class-transformer");
const reportCategory_entity_1 = require("../entities/reportCategory.entity");
const reportCategory_list_public_dto_1 = require("../dtos/public/reportCategory.list.public.dto");
const reportCategory_detail_public_dto_1 = require("../dtos/public/reportCategory.detail.public.dto");
let ReportCategoryPublicService = class ReportCategoryPublicService {
    async getAll() {
        const items = await reportCategory_entity_1.ReportCategory.find();
        return (0, class_transformer_1.plainToInstance)(reportCategory_list_public_dto_1.ReportCategoryListPublicDto, items, {
            excludeExtraneousValues: true,
        });
    }
    async getOne(id) {
        const item = await reportCategory_entity_1.ReportCategory.findOneBy({ id });
        if (!item)
            throw new common_1.NotFoundException('ReportCategory with given id not found');
        return (0, class_transformer_1.plainToInstance)(reportCategory_detail_public_dto_1.ReportCategoryDetailPublicDto, item, {
            excludeExtraneousValues: true,
        });
    }
};
exports.ReportCategoryPublicService = ReportCategoryPublicService;
exports.ReportCategoryPublicService = ReportCategoryPublicService = __decorate([
    (0, common_1.Injectable)()
], ReportCategoryPublicService);
//# sourceMappingURL=reportCategory.public.service.js.map