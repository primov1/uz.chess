"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PurchasedCourseAdminService = void 0;
const common_1 = require("@nestjs/common");
const class_transformer_1 = require("class-transformer");
const purchasedCourse_entity_1 = require("../entities/purchasedCourse.entity");
const purchasedCourse_list_admin_dto_1 = require("../dtos/admin/purchasedCourse.list.admin.dto");
const purchasedCourse_detail_admin_dto_1 = require("../dtos/admin/purchasedCourse.detail.admin.dto");
let PurchasedCourseAdminService = class PurchasedCourseAdminService {
    async getAll() {
        const items = await purchasedCourse_entity_1.PurchasedCourse.find();
        return (0, class_transformer_1.plainToInstance)(purchasedCourse_list_admin_dto_1.PurchasedCourseListAdminDto, items, {
            excludeExtraneousValues: true,
        });
    }
    async getOne(id) {
        const item = await purchasedCourse_entity_1.PurchasedCourse.findOneBy({ id });
        if (!item)
            throw new common_1.NotFoundException('PurchasedCourse with given id not found');
        return (0, class_transformer_1.plainToInstance)(purchasedCourse_detail_admin_dto_1.PurchasedCourseDetailAdminDto, item, {
            excludeExtraneousValues: true,
        });
    }
    async create(payload) {
        const item = purchasedCourse_entity_1.PurchasedCourse.create(payload);
        return purchasedCourse_entity_1.PurchasedCourse.save(item);
    }
    async update(id, payload) {
        const item = await purchasedCourse_entity_1.PurchasedCourse.findOneBy({ id });
        if (!item)
            throw new common_1.NotFoundException('PurchasedCourse with given id not found');
        Object.assign(item, Object.fromEntries(Object.entries(payload).filter(([, v]) => v !== undefined)));
        return purchasedCourse_entity_1.PurchasedCourse.save(item);
    }
    async delete(id) {
        const item = await purchasedCourse_entity_1.PurchasedCourse.findOneBy({ id });
        if (!item)
            throw new common_1.NotFoundException('PurchasedCourse with given id not found');
        await purchasedCourse_entity_1.PurchasedCourse.remove(item);
    }
};
exports.PurchasedCourseAdminService = PurchasedCourseAdminService;
exports.PurchasedCourseAdminService = PurchasedCourseAdminService = __decorate([
    (0, common_1.Injectable)()
], PurchasedCourseAdminService);
//# sourceMappingURL=purchasedCourse.admin.service.js.map