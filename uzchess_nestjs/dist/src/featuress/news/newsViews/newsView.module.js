"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.NewsViewModule = void 0;
const common_1 = require("@nestjs/common");
const newsView_admin_controller_1 = require("./controllers/newsView.admin.controller");
const newsView_public_controller_1 = require("./controllers/newsView.public.controller");
const newsView_admin_service_1 = require("./service/newsView.admin.service");
const newsView_public_service_1 = require("./service/newsView.public.service");
let NewsViewModule = class NewsViewModule {
};
exports.NewsViewModule = NewsViewModule;
exports.NewsViewModule = NewsViewModule = __decorate([
    (0, common_1.Module)({
        controllers: [newsView_admin_controller_1.NewsViewAdminController, newsView_public_controller_1.NewsViewPublicController],
        providers: [newsView_admin_service_1.NewsViewAdminService, newsView_public_service_1.NewsViewPublicService],
    })
], NewsViewModule);
//# sourceMappingURL=newsView.module.js.map