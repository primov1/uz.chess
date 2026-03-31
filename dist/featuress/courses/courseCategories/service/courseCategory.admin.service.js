"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CourseCategoryAdminService = void 0;
const common_1 = require("@nestjs/common");
const class_transformer_1 = require("class-transformer");
const courseCategory_entity_1 = require("../entities/courseCategory.entity");
const courseCategory_list_admin_dto_1 = require("../dtos/admin/courseCategory.list.admin.dto");
const courseCategory_detail_admin_dto_1 = require("../dtos/admin/courseCategory.detail.admin.dto");
let CourseCategoryAdminService = class CourseCategoryAdminService {
    async getAll() {
        const items = await courseCategory_entity_1.CourseCategory.find();
        return (0, class_transformer_1.plainToInstance)(courseCategory_list_admin_dto_1.CourseCategoryListAdminDto, items, {
            excludeExtraneousValues: true,
        });
    }
    async getOne(id) {
        const item = await courseCategory_entity_1.CourseCategory.findOneBy({ id });
        if (!item)
            throw new common_1.NotFoundException('CourseCategory with given id not found');
        return (0, class_transformer_1.plainToInstance)(courseCategory_detail_admin_dto_1.CourseCategoryDetailAdminDto, item, {
            excludeExtraneousValues: true,
        });
    }
    async create(payload) {
        const item = courseCategory_entity_1.CourseCategory.create(payload);
        return courseCategory_entity_1.CourseCategory.save(item);
    }
    async update(id, payload) {
        const item = await courseCategory_entity_1.CourseCategory.findOneBy({ id });
        if (!item)
            throw new common_1.NotFoundException('CourseCategory with given id not found');
        Object.assign(item, Object.fromEntries(Object.entries(payload).filter(([, v]) => v !== undefined)));
        return courseCategory_entity_1.CourseCategory.save(item);
    }
    async delete(id) {
        const item = await courseCategory_entity_1.CourseCategory.findOneBy({ id });
        if (!item)
            throw new common_1.NotFoundException('CourseCategory with given id not found');
        await courseCategory_entity_1.CourseCategory.remove(item);
    }
};
exports.CourseCategoryAdminService = CourseCategoryAdminService;
exports.CourseCategoryAdminService = CourseCategoryAdminService = __decorate([
    (0, common_1.Injectable)()
], CourseCategoryAdminService);
//# sourceMappingURL=courseCategory.admin.service.js.map