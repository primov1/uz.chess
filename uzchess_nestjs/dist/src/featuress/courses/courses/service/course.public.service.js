"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CoursePublicService = void 0;
const common_1 = require("@nestjs/common");
const class_transformer_1 = require("class-transformer");
const course_entity_1 = require("../entities/course.entity");
const course_list_public_dto_1 = require("../dtos/public/course.list.public.dto");
const course_detail_public_dto_1 = require("../dtos/public/course.detail.public.dto");
let CoursePublicService = class CoursePublicService {
    async getAll() {
        const items = await course_entity_1.Course.find();
        return (0, class_transformer_1.plainToInstance)(course_list_public_dto_1.CourseListPublicDto, items, {
            excludeExtraneousValues: true,
        });
    }
    async getOne(id) {
        const item = await course_entity_1.Course.findOneBy({ id });
        if (!item)
            throw new common_1.NotFoundException('Course with given id not found');
        return (0, class_transformer_1.plainToInstance)(course_detail_public_dto_1.CourseDetailPublicDto, item, {
            excludeExtraneousValues: true,
        });
    }
};
exports.CoursePublicService = CoursePublicService;
exports.CoursePublicService = CoursePublicService = __decorate([
    (0, common_1.Injectable)()
], CoursePublicService);
//# sourceMappingURL=course.public.service.js.map