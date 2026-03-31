"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CourseCategoryPublicService = void 0;
const common_1 = require("@nestjs/common");
const class_transformer_1 = require("class-transformer");
const courseCategory_entity_1 = require("../entities/courseCategory.entity");
const courseCategory_list_public_dto_1 = require("../dtos/public/courseCategory.list.public.dto");
const courseCategory_detail_public_dto_1 = require("../dtos/public/courseCategory.detail.public.dto");
let CourseCategoryPublicService = class CourseCategoryPublicService {
    async getAll() {
        const items = await courseCategory_entity_1.CourseCategory.find();
        return (0, class_transformer_1.plainToInstance)(courseCategory_list_public_dto_1.CourseCategoryListPublicDto, items, {
            excludeExtraneousValues: true,
        });
    }
    async getOne(id) {
        const item = await courseCategory_entity_1.CourseCategory.findOneBy({ id });
        if (!item)
            throw new common_1.NotFoundException('CourseCategory with given id not found');
        return (0, class_transformer_1.plainToInstance)(courseCategory_detail_public_dto_1.CourseCategoryDetailPublicDto, item, {
            excludeExtraneousValues: true,
        });
    }
};
exports.CourseCategoryPublicService = CourseCategoryPublicService;
exports.CourseCategoryPublicService = CourseCategoryPublicService = __decorate([
    (0, common_1.Injectable)()
], CourseCategoryPublicService);
//# sourceMappingURL=courseCategory.public.service.js.map