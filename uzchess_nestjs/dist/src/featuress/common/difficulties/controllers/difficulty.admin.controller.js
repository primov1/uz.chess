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
exports.DifficultyAdminController = void 0;
const common_1 = require("@nestjs/common");
const platform_express_1 = require("@nestjs/platform-express");
const swagger_1 = require("@nestjs/swagger");
const roles_decorator_1 = require("../../../auth/decorators/roles.decorator");
const roles_guard_1 = require("../../../auth/guards/roles.guard");
const user_entity_1 = require("../../../users/entities/user.entity");
const difficulty_admin_service_1 = require("../service/difficulty.admin.service");
const difficulty_list_admin_dto_1 = require("../dtos/admin/difficulty.list.admin.dto");
const difficulty_detail_admin_dto_1 = require("../dtos/admin/difficulty.detail.admin.dto");
const difficulty_create_admin_dto_1 = require("../dtos/admin/difficulty.create.admin.dto");
const difficulty_update_admin_dto_1 = require("../dtos/admin/difficulty.update.admin.dto");
const multer_config_1 = require("../../../upload/multer.config");
let DifficultyAdminController = class DifficultyAdminController {
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
    create(payload, file) {
        if (file)
            payload.icon = `/uploads/${file.filename}`;
        return this.service.create(payload);
    }
    update(id, payload, file) {
        if (file)
            payload.icon = `/uploads/${file.filename}`;
        return this.service.update(id, payload);
    }
    delete(id) {
        return this.service.delete(id);
    }
};
exports.DifficultyAdminController = DifficultyAdminController;
__decorate([
    (0, common_1.Get)(),
    (0, swagger_1.ApiOperation)({ summary: 'Get all difficulties' }),
    (0, swagger_1.ApiOkResponse)({ type: () => difficulty_list_admin_dto_1.DifficultyListAdminDto, isArray: true }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], DifficultyAdminController.prototype, "getAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Get difficulty by id' }),
    (0, swagger_1.ApiOkResponse)({ type: () => difficulty_detail_admin_dto_1.DifficultyDetailAdminDto }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], DifficultyAdminController.prototype, "getOne", null);
__decorate([
    (0, common_1.Post)(),
    (0, swagger_1.ApiOperation)({ summary: 'Create difficulty (icon upload optional)' }),
    (0, swagger_1.ApiConsumes)('multipart/form-data'),
    (0, swagger_1.ApiOkResponse)({ type: () => difficulty_detail_admin_dto_1.DifficultyDetailAdminDto }),
    (0, common_1.UseInterceptors)((0, platform_express_1.FileInterceptor)('icon', multer_config_1.multerConfig)),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.UploadedFile)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [difficulty_create_admin_dto_1.DifficultyCreateAdminDto, Object]),
    __metadata("design:returntype", void 0)
], DifficultyAdminController.prototype, "create", null);
__decorate([
    (0, common_1.Patch)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Update difficulty (icon upload optional)' }),
    (0, swagger_1.ApiConsumes)('multipart/form-data'),
    (0, swagger_1.ApiOkResponse)({ type: () => difficulty_detail_admin_dto_1.DifficultyDetailAdminDto }),
    (0, common_1.UseInterceptors)((0, platform_express_1.FileInterceptor)('icon', multer_config_1.multerConfig)),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __param(2, (0, common_1.UploadedFile)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, difficulty_update_admin_dto_1.DifficultyUpdateAdminDto, Object]),
    __metadata("design:returntype", void 0)
], DifficultyAdminController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Delete difficulty' }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], DifficultyAdminController.prototype, "delete", null);
exports.DifficultyAdminController = DifficultyAdminController = __decorate([
    (0, swagger_1.ApiTags)('Admin / Difficulties'),
    (0, swagger_1.ApiBearerAuth)('Bearer'),
    (0, common_1.UseGuards)(roles_guard_1.RolesGuard),
    (0, roles_decorator_1.Roles)(user_entity_1.UserRole.ADMIN, user_entity_1.UserRole.SUPER_ADMIN),
    (0, common_1.Controller)('admin/difficulties'),
    __metadata("design:paramtypes", [difficulty_admin_service_1.DifficultyAdminService])
], DifficultyAdminController);
//# sourceMappingURL=difficulty.admin.controller.js.map