"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BookLikeModule = void 0;
const common_1 = require("@nestjs/common");
const bookLike_admin_controller_1 = require("./controllers/bookLike.admin.controller");
const bookLike_public_controller_1 = require("./controllers/bookLike.public.controller");
const bookLike_admin_service_1 = require("./service/bookLike.admin.service");
const bookLike_public_service_1 = require("./service/bookLike.public.service");
let BookLikeModule = class BookLikeModule {
};
exports.BookLikeModule = BookLikeModule;
exports.BookLikeModule = BookLikeModule = __decorate([
    (0, common_1.Module)({
        controllers: [bookLike_admin_controller_1.BookLikeAdminController, bookLike_public_controller_1.BookLikePublicController],
        providers: [bookLike_admin_service_1.BookLikeAdminService, bookLike_public_service_1.BookLikePublicService],
    })
], BookLikeModule);
//# sourceMappingURL=bookLike.module.js.map