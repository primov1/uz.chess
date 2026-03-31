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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BookCategoryAdminController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const roles_decorator_1 = require("../../../auth/decorators/roles.decorator");
const roles_guard_1 = require("../../../auth/guards/roles.guard");
const user_entity_1 = require("../../../users/entities/user.entity");
const bookCategory_admin_service_1 = require("../service/bookCategory.admin.service");
const bookCategory_list_admin_dto_1 = require("../dtos/admin/bookCategory.list.admin.dto");
const bookCategory_detail_admin_dto_1 = require("../dtos/admin/bookCategory.detail.admin.dto");
const bookCategory_create_admin_dto_1 = require("../dtos/admin/bookCategory.create.admin.dto");
const bookCategory_update_admin_dto_1 = require("../dtos/admin/bookCategory.update.admin.dto");
let BookCategoryAdminController = class BookCategoryAdminController {
    service;
    constructor(service) {
        this.service = service;
    }
    getAll() {
        return this.service.getAll();
    }
    getOne(id) {
        return this.service.getOne(id);
    }
    create(payload) {
        return this.service.create(payload);
    }
    update(id, payload) {
        return this.service.update(id, payload);
    }
    delete(id) {
        return this.service.delete(id);
    }
};
exports.BookCategoryAdminController = BookCategoryAdminController;
__decorate([
    (0, common_1.Get)(),
    (0, swagger_1.ApiOperation)({ summary: 'Get all book categories' }),
    (0, swagger_1.ApiOkResponse)({ type: () => bookCategory_list_admin_dto_1.BookCategoryListAdminDto, isArray: true }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], BookCategoryAdminController.prototype, "getAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Get book category by id' }),
    (0, swagger_1.ApiOkResponse)({ type: () => bookCategory_detail_admin_dto_1.BookCategoryDetailAdminDto }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], BookCategoryAdminController.prototype, "getOne", null);
__decorate([
    (0, common_1.Post)(),
    (0, swagger_1.ApiOperation)({ summary: 'Create book category' }),
    (0, swagger_1.ApiOkResponse)({ type: () => bookCategory_detail_admin_dto_1.BookCategoryDetailAdminDto }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [bookCategory_create_admin_dto_1.BookCategoryCreateAdminDto]),
    __metadata("design:returntype", void 0)
], BookCategoryAdminController.prototype, "create", null);
__decorate([
    (0, common_1.Patch)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Update book category' }),
    (0, swagger_1.ApiOkResponse)({ type: () => bookCategory_detail_admin_dto_1.BookCategoryDetailAdminDto }),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, bookCategory_update_admin_dto_1.BookCategoryUpdateAdminDto]),
    __metadata("design:returntype", void 0)
], BookCategoryAdminController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Delete book category' }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], BookCategoryAdminController.prototype, "delete", null);
exports.BookCategoryAdminController = BookCategoryAdminController = __decorate([
    (0, swagger_1.ApiTags)('Admin / Book Categories'),
    (0, swagger_1.ApiBearerAuth)('Bearer'),
    (0, common_1.UseGuards)(roles_guard_1.RolesGuard),
    (0, roles_decorator_1.Roles)(user_entity_1.UserRole.ADMIN, user_entity_1.UserRole.SUPER_ADMIN),
    (0, common_1.Controller)('admin/book-categories'),
    __metadata("design:paramtypes", [bookCategory_admin_service_1.BookCategoryAdminService])
], BookCategoryAdminController);
//# sourceMappingURL=bookCategory.admin.controller.js.map