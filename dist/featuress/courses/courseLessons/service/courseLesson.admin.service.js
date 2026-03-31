"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CourseLessonAdminService = void 0;
const common_1 = require("@nestjs/common");
const class_transformer_1 = require("class-transformer");
const courseLesson_entity_1 = require("../entities/courseLesson.entity");
const courseLesson_list_admin_dto_1 = require("../dtos/admin/courseLesson.list.admin.dto");
const courseLesson_detail_admin_dto_1 = require("../dtos/admin/courseLesson.detail.admin.dto");
let CourseLessonAdminService = class CourseLessonAdminService {
    async getAll() {
        const items = await courseLesson_entity_1.CourseLesson.find();
        return (0, class_transformer_1.plainToInstance)(courseLesson_list_admin_dto_1.CourseLessonListAdminDto, items, {
            excludeExtraneousValues: true,
        });
    }
    async getOne(id) {
        const item = await courseLesson_entity_1.CourseLesson.findOneBy({ id });
        if (!item)
            throw new common_1.NotFoundException('CourseLesson with given id not found');
        return (0, class_transformer_1.plainToInstance)(courseLesson_detail_admin_dto_1.CourseLessonDetailAdminDto, item, {
            excludeExtraneousValues: true,
        });
    }
    async create(payload) {
        const item = courseLesson_entity_1.CourseLesson.create(payload);
        return courseLesson_entity_1.CourseLesson.save(item);
    }
    async update(id, payload) {
        const item = await courseLesson_entity_1.CourseLesson.findOneBy({ id });
        if (!item)
            throw new common_1.NotFoundException('CourseLesson with given id not found');
        Object.assign(item, Object.fromEntries(Object.entries(payload).filter(([, v]) => v !== undefined)));
        return courseLesson_entity_1.CourseLesson.save(item);
    }
    async delete(id) {
        const item = await courseLesson_entity_1.CourseLesson.findOneBy({ id });
        if (!item)
            throw new common_1.NotFoundException('CourseLesson with given id not found');
        await courseLesson_entity_1.CourseLesson.remove(item);
    }
};
exports.CourseLessonAdminService = CourseLessonAdminService;
exports.CourseLessonAdminService = CourseLessonAdminService = __decorate([
    (0, common_1.Injectable)()
], CourseLessonAdminService);
//# sourceMappingURL=courseLesson.admin.service.js.map