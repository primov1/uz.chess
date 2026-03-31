"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CourseReviewPublicService = void 0;
const common_1 = require("@nestjs/common");
const class_transformer_1 = require("class-transformer");
const courseReview_entity_1 = require("../entities/courseReview.entity");
const courseReview_list_public_dto_1 = require("../dtos/public/courseReview.list.public.dto");
const courseReview_detail_public_dto_1 = require("../dtos/public/courseReview.detail.public.dto");
let CourseReviewPublicService = class CourseReviewPublicService {
    async getAll() {
        const items = await courseReview_entity_1.CourseReview.find();
        return (0, class_transformer_1.plainToInstance)(courseReview_list_public_dto_1.CourseReviewListPublicDto, items, {
            excludeExtraneousValues: true,
        });
    }
    async getOne(id) {
        const item = await courseReview_entity_1.CourseReview.findOneBy({ id });
        if (!item)
            throw new common_1.NotFoundException('CourseReview with given id not found');
        return (0, class_transformer_1.plainToInstance)(courseReview_detail_public_dto_1.CourseReviewDetailPublicDto, item, {
            excludeExtraneousValues: true,
        });
    }
};
exports.CourseReviewPublicService = CourseReviewPublicService;
exports.CourseReviewPublicService = CourseReviewPublicService = __decorate([
    (0, common_1.Injectable)()
], CourseReviewPublicService);
//# sourceMappingURL=courseReview.public.service.js.map