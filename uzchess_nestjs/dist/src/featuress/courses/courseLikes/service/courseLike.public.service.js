"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CourseLikePublicService = void 0;
const common_1 = require("@nestjs/common");
const class_transformer_1 = require("class-transformer");
const courseLike_entity_1 = require("../entities/courseLike.entity");
const course_entity_1 = require("../../courses/entities/course.entity");
const courseLike_list_public_dto_1 = require("../dtos/public/courseLike.list.public.dto");
const courseLike_detail_public_dto_1 = require("../dtos/public/courseLike.detail.public.dto");
let CourseLikePublicService = class CourseLikePublicService {
    async getAll() {
        const items = await courseLike_entity_1.CourseLike.find();
        return (0, class_transformer_1.plainToInstance)(courseLike_list_public_dto_1.CourseLikeListPublicDto, items, {
            excludeExtraneousValues: true,
        });
    }
    async getOne(id) {
        const item = await courseLike_entity_1.CourseLike.findOneBy({ id });
        if (!item)
            throw new common_1.NotFoundException('CourseLike with given id not found');
        return (0, class_transformer_1.plainToInstance)(courseLike_detail_public_dto_1.CourseLikeDetailPublicDto, item, {
            excludeExtraneousValues: true,
        });
    }
    async toggle(courseId, userId) {
        const course = await course_entity_1.Course.findOneBy({ id: courseId });
        if (!course)
            throw new common_1.NotFoundException(`Kurs topilmadi (id: ${courseId})`);
        const existing = await courseLike_entity_1.CourseLike.findOne({ where: { courseId, userId } });
        if (existing) {
            await courseLike_entity_1.CourseLike.remove(existing);
            course.likesCount = Math.max(0, (course.likesCount || 0) - 1);
            await course.save();
            return {
                liked: false,
                likesCount: course.likesCount,
                message: 'Kurs likedan olib tashlandi',
            };
        }
        const like = courseLike_entity_1.CourseLike.create({ courseId, userId });
        await like.save();
        course.likesCount = (course.likesCount || 0) + 1;
        await course.save();
        return {
            liked: true,
            likesCount: course.likesCount,
            message: 'Kurs like qilindi',
            data: (0, class_transformer_1.plainToInstance)(courseLike_detail_public_dto_1.CourseLikeDetailPublicDto, like, {
                excludeExtraneousValues: true,
            }),
        };
    }
    async getMyLikes(userId) {
        const items = await courseLike_entity_1.CourseLike.find({ where: { userId } });
        return (0, class_transformer_1.plainToInstance)(courseLike_list_public_dto_1.CourseLikeListPublicDto, items, {
            excludeExtraneousValues: true,
        });
    }
};
exports.CourseLikePublicService = CourseLikePublicService;
exports.CourseLikePublicService = CourseLikePublicService = __decorate([
    (0, common_1.Injectable)()
], CourseLikePublicService);
//# sourceMappingURL=courseLike.public.service.js.map