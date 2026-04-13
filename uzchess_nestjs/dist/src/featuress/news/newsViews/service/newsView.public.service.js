"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.NewsViewPublicService = void 0;
const common_1 = require("@nestjs/common");
const newsView_entity_1 = require("../entities/newsView.entity");
let NewsViewPublicService = class NewsViewPublicService {
    async create(userId, payload) {
        const existing = await newsView_entity_1.NewsView.findOneBy({
            userId,
            newsId: payload.newsId,
        });
        if (existing) {
            existing.count += 1;
            return newsView_entity_1.NewsView.save(existing);
        }
        const item = newsView_entity_1.NewsView.create({
            userId,
            newsId: payload.newsId,
        });
        return newsView_entity_1.NewsView.save(item);
    }
};
exports.NewsViewPublicService = NewsViewPublicService;
exports.NewsViewPublicService = NewsViewPublicService = __decorate([
    (0, common_1.Injectable)()
], NewsViewPublicService);
//# sourceMappingURL=newsView.public.service.js.map