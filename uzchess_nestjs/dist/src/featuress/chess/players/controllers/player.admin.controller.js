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
exports.PlayerAdminController = void 0;
const common_1 = require("@nestjs/common");
const platform_express_1 = require("@nestjs/platform-express");
const swagger_1 = require("@nestjs/swagger");
const roles_decorator_1 = require("../../../auth/decorators/roles.decorator");
const roles_guard_1 = require("../../../auth/guards/roles.guard");
const user_entity_1 = require("../../../users/entities/user.entity");
const player_admin_service_1 = require("../service/player.admin.service");
const player_list_admin_dto_1 = require("../dtos/admin/player.list.admin.dto");
const player_detail_admin_dto_1 = require("../dtos/admin/player.detail.admin.dto");
const player_create_admin_dto_1 = require("../dtos/admin/player.create.admin.dto");
const player_update_admin_dto_1 = require("../dtos/admin/player.update.admin.dto");
const multer_config_1 = require("../../../upload/multer.config");
let PlayerAdminController = class PlayerAdminController {
    playerAdminService;
    constructor(playerAdminService) {
        this.playerAdminService = playerAdminService;
    }
    getAll() {
        return this.playerAdminService.getAll();
    }
    getOne(id) {
        return this.playerAdminService.getOne(id);
    }
    create(payload, file) {
        return this.playerAdminService.create(payload, file);
    }
    update(id, payload, file) {
        return this.playerAdminService.update(id, payload, file);
    }
    delete(id) {
        return this.playerAdminService.delete(id);
    }
};
exports.PlayerAdminController = PlayerAdminController;
__decorate([
    (0, common_1.Get)(),
    (0, swagger_1.ApiOperation)({ summary: 'Get all players' }),
    (0, swagger_1.ApiOkResponse)({ type: () => player_list_admin_dto_1.PlayerListAdminDto, isArray: true }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], PlayerAdminController.prototype, "getAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Get player by id' }),
    (0, swagger_1.ApiOkResponse)({ type: () => player_detail_admin_dto_1.PlayerDetailAdminDto }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], PlayerAdminController.prototype, "getOne", null);
__decorate([
    (0, common_1.Post)(),
    (0, swagger_1.ApiOperation)({ summary: 'Create player' }),
    (0, swagger_1.ApiConsumes)('multipart/form-data'),
    (0, swagger_1.ApiBody)({
        schema: {
            type: 'object',
            properties: {
                countryId: { type: 'number' },
                fullName: { type: 'string' },
                image: { type: 'string', format: 'binary' },
                classic: { type: 'number' },
                rapid: { type: 'number' },
                blitz: { type: 'number' },
            },
            required: ['countryId', 'fullName'],
        },
    }),
    (0, swagger_1.ApiOkResponse)({ type: () => player_detail_admin_dto_1.PlayerDetailAdminDto }),
    (0, common_1.UseInterceptors)((0, platform_express_1.FileInterceptor)('image', multer_config_1.multerConfig)),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.UploadedFile)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [player_create_admin_dto_1.PlayerCreateAdminDto, Object]),
    __metadata("design:returntype", void 0)
], PlayerAdminController.prototype, "create", null);
__decorate([
    (0, common_1.Patch)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Update player' }),
    (0, swagger_1.ApiConsumes)('multipart/form-data'),
    (0, swagger_1.ApiBody)({
        schema: {
            type: 'object',
            properties: {
                countryId: { type: 'number' },
                fullName: { type: 'string' },
                image: { type: 'string', format: 'binary' },
                classic: { type: 'number' },
                rapid: { type: 'number' },
                blitz: { type: 'number' },
            },
        },
    }),
    (0, swagger_1.ApiOkResponse)({ type: () => player_detail_admin_dto_1.PlayerDetailAdminDto }),
    (0, common_1.UseInterceptors)((0, platform_express_1.FileInterceptor)('image', multer_config_1.multerConfig)),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __param(2, (0, common_1.UploadedFile)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, player_update_admin_dto_1.PlayerUpdateAdminDto, Object]),
    __metadata("design:returntype", void 0)
], PlayerAdminController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Delete player' }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], PlayerAdminController.prototype, "delete", null);
exports.PlayerAdminController = PlayerAdminController = __decorate([
    (0, swagger_1.ApiTags)('Admin / Players'),
    (0, swagger_1.ApiBearerAuth)('Bearer'),
    (0, common_1.UseGuards)(roles_guard_1.RolesGuard),
    (0, roles_decorator_1.Roles)(user_entity_1.UserRole.ADMIN, user_entity_1.UserRole.SUPER_ADMIN),
    (0, common_1.Controller)('admin/players'),
    __metadata("design:paramtypes", [player_admin_service_1.PlayerAdminService])
], PlayerAdminController);
//# sourceMappingURL=player.admin.controller.js.map