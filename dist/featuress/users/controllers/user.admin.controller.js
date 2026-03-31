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
exports.UserAdminController = void 0;
const common_1 = require("@nestjs/common");
const platform_express_1 = require("@nestjs/platform-express");
const swagger_1 = require("@nestjs/swagger");
const roles_decorator_1 = require("../../auth/decorators/roles.decorator");
const roles_guard_1 = require("../../auth/guards/roles.guard");
const user_entity_1 = require("../entities/user.entity");
const user_admin_service_1 = require("../service/user.admin.service");
const user_list_admin_dto_1 = require("../dtos/admin/user.list.admin.dto");
const user_detail_admin_dto_1 = require("../dtos/admin/user.detail.admin.dto");
const user_create_admin_dto_1 = require("../dtos/admin/user.create.admin.dto");
const user_update_admin_dto_1 = require("../dtos/admin/user.update.admin.dto");
const multer_config_1 = require("../../upload/multer.config");
let UserAdminController = class UserAdminController {
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
            payload.profileImage = `/uploads/${file.filename}`;
        return this.service.create(payload);
    }
    update(id, payload, file) {
        if (file)
            payload.profileImage = `/uploads/${file.filename}`;
        return this.service.update(id, payload);
    }
    delete(id) {
        return this.service.delete(id);
    }
};
exports.UserAdminController = UserAdminController;
__decorate([
    (0, common_1.Get)(),
    (0, swagger_1.ApiOperation)({ summary: 'Get all users' }),
    (0, swagger_1.ApiOkResponse)({ type: () => user_list_admin_dto_1.UserListAdminDto, isArray: true }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], UserAdminController.prototype, "getAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Get user by id' }),
    (0, swagger_1.ApiOkResponse)({ type: () => user_detail_admin_dto_1.UserDetailAdminDto }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], UserAdminController.prototype, "getOne", null);
__decorate([
    (0, common_1.Post)(),
    (0, swagger_1.ApiOperation)({ summary: 'Create user (profileImage upload optional)' }),
    (0, swagger_1.ApiConsumes)('multipart/form-data'),
    (0, swagger_1.ApiBody)({
        schema: {
            type: 'object',
            required: ['fullName', 'login', 'loginType'],
            properties: {
                role: { type: 'string', enum: ['user', 'admin', 'superAdmin'] },
                fullName: { type: 'string', maxLength: 64 },
                profileImage: {
                    type: 'string',
                    format: 'binary',
                    description: 'Profile photo (optional)',
                },
                login: { type: 'string', maxLength: 64 },
                loginType: { type: 'string', enum: ['email', 'number'] },
                password: { type: 'string', maxLength: 128 },
                birthDate: { type: 'string', description: 'ISO date' },
            },
        },
    }),
    (0, swagger_1.ApiOkResponse)({ type: () => user_detail_admin_dto_1.UserDetailAdminDto }),
    (0, common_1.UseInterceptors)((0, platform_express_1.FileInterceptor)('profileImage', multer_config_1.multerConfig)),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.UploadedFile)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [user_create_admin_dto_1.UserCreateAdminDto, Object]),
    __metadata("design:returntype", void 0)
], UserAdminController.prototype, "create", null);
__decorate([
    (0, common_1.Patch)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Update user (profileImage upload optional)' }),
    (0, swagger_1.ApiConsumes)('multipart/form-data'),
    (0, swagger_1.ApiBody)({
        schema: {
            type: 'object',
            properties: {
                role: { type: 'string', enum: ['user', 'admin', 'superAdmin'] },
                fullName: { type: 'string', maxLength: 64 },
                profileImage: {
                    type: 'string',
                    format: 'binary',
                    description: 'Profile photo (optional)',
                },
                password: { type: 'string', maxLength: 128 },
                birthDate: { type: 'string', description: 'ISO date' },
                isVerified: { type: 'boolean' },
                isActive: { type: 'boolean' },
            },
        },
    }),
    (0, swagger_1.ApiOkResponse)({ type: () => user_detail_admin_dto_1.UserDetailAdminDto }),
    (0, common_1.UseInterceptors)((0, platform_express_1.FileInterceptor)('profileImage', multer_config_1.multerConfig)),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __param(2, (0, common_1.UploadedFile)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, user_update_admin_dto_1.UserUpdateAdminDto, Object]),
    __metadata("design:returntype", void 0)
], UserAdminController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Delete user' }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], UserAdminController.prototype, "delete", null);
exports.UserAdminController = UserAdminController = __decorate([
    (0, swagger_1.ApiTags)('Admin / Users'),
    (0, swagger_1.ApiBearerAuth)('Bearer'),
    (0, common_1.UseGuards)(roles_guard_1.RolesGuard),
    (0, roles_decorator_1.Roles)(user_entity_1.UserRole.ADMIN, user_entity_1.UserRole.SUPER_ADMIN),
    (0, common_1.Controller)('admin/users'),
    __metadata("design:paramtypes", [user_admin_service_1.UserAdminService])
], UserAdminController);
//# sourceMappingURL=user.admin.controller.js.map