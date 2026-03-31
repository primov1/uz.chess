"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.NewsAdminService = void 0;
const common_1 = require("@nestjs/common");
const class_transformer_1 = require("class-transformer");
const news_entity_1 = require("../entities/news.entity");
const news_list_admin_dto_1 = require("../dtos/admin/news.list.admin.dto");
const news_detail_admin_dto_1 = require("../dtos/admin/news.detail.admin.dto");
let NewsAdminService = class NewsAdminService {
    async getAll() {
        const items = await news_entity_1.News.find({ order: { date: 'DESC' } });
        return (0, class_transformer_1.plainToInstance)(news_list_admin_dto_1.NewsListAdminDto, items, {
            excludeExtraneousValues: true,
        });
    }
    async getOne(id) {
        const item = await news_entity_1.News.findOneBy({ id });
        if (!item)
            throw new common_1.NotFoundException('News with given id not found');
        return (0, class_transformer_1.plainToInstance)(news_detail_admin_dto_1.NewsDetailAdminDto, item, {
            excludeExtraneousValues: true,
        });
    }
    async create(payload) {
        const item = news_entity_1.News.create(payload);
        return news_entity_1.News.save(item);
    }
    async update(id, payload) {
        const item = await news_entity_1.News.findOneBy({ id });
        if (!item)
            throw new common_1.NotFoundException('News with given id not found');
        Object.assign(item, Object.fromEntries(Object.entries(payload).filter(([, v]) => v !== undefined)));
        return news_entity_1.News.save(item);
    }
    async delete(id) {
        const item = await news_entity_1.News.findOneBy({ id });
        if (!item)
            throw new common_1.NotFoundException('News with given id not found');
        await news_entity_1.News.remove(item);
    }
};
exports.NewsAdminService = NewsAdminService;
exports.NewsAdminService = NewsAdminService = __decorate([
    (0, common_1.Injectable)()
], NewsAdminService);
//# sourceMappingURL=news.admin.service.js.map