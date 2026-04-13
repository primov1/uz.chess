"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.NewsItemModule = void 0;
const common_1 = require("@nestjs/common");
const news_admin_controller_1 = require("./controllers/news.admin.controller");
const news_public_controller_1 = require("./controllers/news.public.controller");
const news_admin_service_1 = require("./service/news.admin.service");
const news_public_service_1 = require("./service/news.public.service");
let NewsItemModule = class NewsItemModule {
};
exports.NewsItemModule = NewsItemModule;
exports.NewsItemModule = NewsItemModule = __decorate([
    (0, common_1.Module)({
        controllers: [news_admin_controller_1.NewsAdminController, news_public_controller_1.NewsPublicController],
        providers: [news_admin_service_1.NewsAdminService, news_public_service_1.NewsPublicService],
    })
], NewsItemModule);
//# sourceMappingURL=news.module.js.map