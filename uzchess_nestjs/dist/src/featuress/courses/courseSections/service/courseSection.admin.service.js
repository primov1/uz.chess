"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CourseSectionAdminService = void 0;
const common_1 = require("@nestjs/common");
const class_transformer_1 = require("class-transformer");
const courseSection_entity_1 = require("../entities/courseSection.entity");
const courseSection_list_admin_dto_1 = require("../dtos/admin/courseSection.list.admin.dto");
const courseSection_detail_admin_dto_1 = require("../dtos/admin/courseSection.detail.admin.dto");
let CourseSectionAdminService = class CourseSectionAdminService {
    async getAll() {
        const items = await courseSection_entity_1.CourseSection.find();
        return (0, class_transformer_1.plainToInstance)(courseSection_list_admin_dto_1.CourseSectionListAdminDto, items, {
            excludeExtraneousValues: true,
        });
    }
    async getOne(id) {
        const item = await courseSection_entity_1.CourseSection.findOneBy({ id });
        if (!item)
            throw new common_1.NotFoundException('CourseSection with given id not found');
        return (0, class_transformer_1.plainToInstance)(courseSection_detail_admin_dto_1.CourseSectionDetailAdminDto, item, {
            excludeExtraneousValues: true,
        });
    }
    async create(payload) {
        const item = courseSection_entity_1.CourseSection.create(payload);
        return courseSection_entity_1.CourseSection.save(item);
    }
    async update(id, payload) {
        const item = await courseSection_entity_1.CourseSection.findOneBy({ id });
        if (!item)
            throw new common_1.NotFoundException('CourseSection with given id not found');
        Object.assign(item, Object.fromEntries(Object.entries(payload).filter(([, v]) => v !== undefined)));
        return courseSection_entity_1.CourseSection.save(item);
    }
    async delete(id) {
        const item = await courseSection_entity_1.CourseSection.findOneBy({ id });
        if (!item)
            throw new common_1.NotFoundException('CourseSection with given id not found');
        await courseSection_entity_1.CourseSection.remove(item);
    }
};
exports.CourseSectionAdminService = CourseSectionAdminService;
exports.CourseSectionAdminService = CourseSectionAdminService = __decorate([
    (0, common_1.Injectable)()
], CourseSectionAdminService);
//# sourceMappingURL=courseSection.admin.service.js.map