"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BookModule = void 0;
const common_1 = require("@nestjs/common");
const book_admin_controller_1 = require("./controllers/book.admin.controller");
const book_public_controller_1 = require("./controllers/book.public.controller");
const book_admin_service_1 = require("./service/book.admin.service");
const book_public_service_1 = require("./service/book.public.service");
let BookModule = class BookModule {
};
exports.BookModule = BookModule;
exports.BookModule = BookModule = __decorate([
    (0, common_1.Module)({
        controllers: [book_admin_controller_1.BookAdminController, book_public_controller_1.BookPublicController],
        providers: [book_admin_service_1.BookAdminService, book_public_service_1.BookPublicService],
    })
], BookModule);
//# sourceMappingURL=book.module.js.map