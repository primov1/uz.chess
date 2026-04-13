"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BookReviewModule = void 0;
const common_1 = require("@nestjs/common");
const bookReview_admin_controller_1 = require("./controllers/bookReview.admin.controller");
const bookReview_public_controller_1 = require("./controllers/bookReview.public.controller");
const bookReview_admin_service_1 = require("./service/bookReview.admin.service");
const bookReview_public_service_1 = require("./service/bookReview.public.service");
let BookReviewModule = class BookReviewModule {
};
exports.BookReviewModule = BookReviewModule;
exports.BookReviewModule = BookReviewModule = __decorate([
    (0, common_1.Module)({
        controllers: [bookReview_admin_controller_1.BookReviewAdminController, bookReview_public_controller_1.BookReviewPublicController],
        providers: [bookReview_admin_service_1.BookReviewAdminService, bookReview_public_service_1.BookReviewPublicService],
    })
], BookReviewModule);
//# sourceMappingURL=bookReview.module.js.map