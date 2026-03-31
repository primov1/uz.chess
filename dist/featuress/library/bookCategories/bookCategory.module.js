"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BookCategoryModule = void 0;
const common_1 = require("@nestjs/common");
const bookCategory_admin_controller_1 = require("./controllers/bookCategory.admin.controller");
const bookCategory_public_controller_1 = require("./controllers/bookCategory.public.controller");
const bookCategory_admin_service_1 = require("./service/bookCategory.admin.service");
const bookCategory_public_service_1 = require("./service/bookCategory.public.service");
let BookCategoryModule = class BookCategoryModule {
};
exports.BookCategoryModule = BookCategoryModule;
exports.BookCategoryModule = BookCategoryModule = __decorate([
    (0, common_1.Module)({
        controllers: [bookCategory_admin_controller_1.BookCategoryAdminController, bookCategory_public_controller_1.BookCategoryPublicController],
        providers: [bookCategory_admin_service_1.BookCategoryAdminService, bookCategory_public_service_1.BookCategoryPublicService],
    })
], BookCategoryModule);
//# sourceMappingURL=bookCategory.module.js.map