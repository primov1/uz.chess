"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CourseLessonPublicService = void 0;
const common_1 = require("@nestjs/common");
const class_transformer_1 = require("class-transformer");
const courseLesson_entity_1 = require("../entities/courseLesson.entity");
const courseLesson_list_public_dto_1 = require("../dtos/public/courseLesson.list.public.dto");
const courseLesson_detail_public_dto_1 = require("../dtos/public/courseLesson.detail.public.dto");
let CourseLessonPublicService = class CourseLessonPublicService {
    async getAll() {
        const items = await courseLesson_entity_1.CourseLesson.find();
        return (0, class_transformer_1.plainToInstance)(courseLesson_list_public_dto_1.CourseLessonListPublicDto, items, {
            excludeExtraneousValues: true,
        });
    }
    async getOne(id) {
        const item = await courseLesson_entity_1.CourseLesson.findOneBy({ id });
        if (!item)
            throw new common_1.NotFoundException('CourseLesson with given id not found');
        return (0, class_transformer_1.plainToInstance)(courseLesson_detail_public_dto_1.CourseLessonDetailPublicDto, item, {
            excludeExtraneousValues: true,
        });
    }
};
exports.CourseLessonPublicService = CourseLessonPublicService;
exports.CourseLessonPublicService = CourseLessonPublicService = __decorate([
    (0, common_1.Injectable)()
], CourseLessonPublicService);
//# sourceMappingURL=courseLesson.public.service.js.map