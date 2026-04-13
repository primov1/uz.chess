"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PurchasedCoursePublicService = void 0;
const common_1 = require("@nestjs/common");
const class_transformer_1 = require("class-transformer");
const purchasedCourse_entity_1 = require("../entities/purchasedCourse.entity");
const purchasedCourse_list_public_dto_1 = require("../dtos/public/purchasedCourse.list.public.dto");
const purchasedCourse_detail_public_dto_1 = require("../dtos/public/purchasedCourse.detail.public.dto");
let PurchasedCoursePublicService = class PurchasedCoursePublicService {
    async getAll() {
        const items = await purchasedCourse_entity_1.PurchasedCourse.find();
        return (0, class_transformer_1.plainToInstance)(purchasedCourse_list_public_dto_1.PurchasedCourseListPublicDto, items, {
            excludeExtraneousValues: true,
        });
    }
    async getOne(id) {
        const item = await purchasedCourse_entity_1.PurchasedCourse.findOneBy({ id });
        if (!item)
            throw new common_1.NotFoundException('PurchasedCourse with given id not found');
        return (0, class_transformer_1.plainToInstance)(purchasedCourse_detail_public_dto_1.PurchasedCourseDetailPublicDto, item, {
            excludeExtraneousValues: true,
        });
    }
};
exports.PurchasedCoursePublicService = PurchasedCoursePublicService;
exports.PurchasedCoursePublicService = PurchasedCoursePublicService = __decorate([
    (0, common_1.Injectable)()
], PurchasedCoursePublicService);
//# sourceMappingURL=purchasedCourse.public.service.js.map