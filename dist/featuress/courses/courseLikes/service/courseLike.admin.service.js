"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CourseLikeAdminService = void 0;
const common_1 = require("@nestjs/common");
const class_transformer_1 = require("class-transformer");
const courseLike_entity_1 = require("../entities/courseLike.entity");
const courseLike_list_admin_dto_1 = require("../dtos/admin/courseLike.list.admin.dto");
const courseLike_detail_admin_dto_1 = require("../dtos/admin/courseLike.detail.admin.dto");
let CourseLikeAdminService = class CourseLikeAdminService {
    async getAll() {
        const items = await courseLike_entity_1.CourseLike.find();
        return (0, class_transformer_1.plainToInstance)(courseLike_list_admin_dto_1.CourseLikeListAdminDto, items, {
            excludeExtraneousValues: true,
        });
    }
    async getOne(id) {
        const item = await courseLike_entity_1.CourseLike.findOneBy({ id });
        if (!item)
            throw new common_1.NotFoundException('CourseLike with given id not found');
        return (0, class_transformer_1.plainToInstance)(courseLike_detail_admin_dto_1.CourseLikeDetailAdminDto, item, {
            excludeExtraneousValues: true,
        });
    }
    async create(payload) {
        const item = courseLike_entity_1.CourseLike.create(payload);
        return courseLike_entity_1.CourseLike.save(item);
    }
    async update(id, payload) {
        const item = await courseLike_entity_1.CourseLike.findOneBy({ id });
        if (!item)
            throw new common_1.NotFoundException('CourseLike with given id not found');
        Object.assign(item, Object.fromEntries(Object.entries(payload).filter(([, v]) => v !== undefined)));
        return courseLike_entity_1.CourseLike.save(item);
    }
    async delete(id) {
        const item = await courseLike_entity_1.CourseLike.findOneBy({ id });
        if (!item)
            throw new common_1.NotFoundException('CourseLike with given id not found');
        await courseLike_entity_1.CourseLike.remove(item);
    }
};
exports.CourseLikeAdminService = CourseLikeAdminService;
exports.CourseLikeAdminService = CourseLikeAdminService = __decorate([
    (0, common_1.Injectable)()
], CourseLikeAdminService);
//# sourceMappingURL=courseLike.admin.service.js.map