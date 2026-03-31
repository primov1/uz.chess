"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.NewsViewAdminController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const roles_decorator_1 = require("../../../auth/decorators/roles.decorator");
const roles_guard_1 = require("../../../auth/guards/roles.guard");
const user_entity_1 = require("../../../users/entities/user.entity");
const newsView_admin_service_1 = require("../service/newsView.admin.service");
const newsView_list_admin_dto_1 = require("../dtos/admin/newsView.list.admin.dto");
let NewsViewAdminController = class NewsViewAdminController {
    service;
    constructor(service) {
        this.service = service;
    }
    getAll() {
        return this.service.getAll();
    }
};
exports.NewsViewAdminController = NewsViewAdminController;
__decorate([
    (0, common_1.Get)(),
    (0, swagger_1.ApiOperation)({ summary: 'Get all news views' }),
    (0, swagger_1.ApiOkResponse)({ type: () => newsView_list_admin_dto_1.NewsViewListAdminDto, isArray: true }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], NewsViewAdminController.prototype, "getAll", null);
exports.NewsViewAdminController = NewsViewAdminController = __decorate([
    (0, swagger_1.ApiTags)('Admin / News Views'),
    (0, swagger_1.ApiBearerAuth)('Bearer'),
    (0, common_1.UseGuards)(roles_guard_1.RolesGuard),
    (0, roles_decorator_1.Roles)(user_entity_1.UserRole.ADMIN, user_entity_1.UserRole.SUPER_ADMIN),
    (0, common_1.Controller)('admin/news-views'),
    __metadata("design:paramtypes", [newsView_admin_service_1.NewsViewAdminService])
], NewsViewAdminController);
//# sourceMappingURL=newsView.admin.controller.js.map