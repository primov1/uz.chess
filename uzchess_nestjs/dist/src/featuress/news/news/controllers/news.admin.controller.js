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
exports.NewsAdminController = void 0;
const common_1 = require("@nestjs/common");
const platform_express_1 = require("@nestjs/platform-express");
const swagger_1 = require("@nestjs/swagger");
const roles_decorator_1 = require("../../../auth/decorators/roles.decorator");
const roles_guard_1 = require("../../../auth/guards/roles.guard");
const user_entity_1 = require("../../../users/entities/user.entity");
const news_admin_service_1 = require("../service/news.admin.service");
const news_list_admin_dto_1 = require("../dtos/admin/news.list.admin.dto");
const news_detail_admin_dto_1 = require("../dtos/admin/news.detail.admin.dto");
const news_create_admin_dto_1 = require("../dtos/admin/news.create.admin.dto");
const news_update_admin_dto_1 = require("../dtos/admin/news.update.admin.dto");
const multer_config_1 = require("../../../upload/multer.config");
let NewsAdminController = class NewsAdminController {
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
            payload.image = `/uploads/${file.filename}`;
        return this.service.create(payload);
    }
    update(id, payload, file) {
        if (file)
            payload.image = `/uploads/${file.filename}`;
        return this.service.update(id, payload);
    }
    delete(id) {
        return this.service.delete(id);
    }
};
exports.NewsAdminController = NewsAdminController;
__decorate([
    (0, common_1.Get)(),
    (0, swagger_1.ApiOperation)({ summary: 'Get all news' }),
    (0, swagger_1.ApiOkResponse)({ type: () => news_list_admin_dto_1.NewsListAdminDto, isArray: true }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], NewsAdminController.prototype, "getAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Get news by id' }),
    (0, swagger_1.ApiOkResponse)({ type: () => news_detail_admin_dto_1.NewsDetailAdminDto }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], NewsAdminController.prototype, "getOne", null);
__decorate([
    (0, common_1.Post)(),
    (0, swagger_1.ApiOperation)({ summary: 'Create news (image upload optional)' }),
    (0, swagger_1.ApiConsumes)('multipart/form-data'),
    (0, swagger_1.ApiBody)({
        schema: {
            type: 'object',
            required: ['title', 'content', 'date'],
            properties: {
                title: { type: 'string', maxLength: 256 },
                content: { type: 'string' },
                date: { type: 'string', description: 'ISO timestamp' },
                image: {
                    type: 'string',
                    format: 'binary',
                    description: 'News image file (optional)',
                },
            },
        },
    }),
    (0, swagger_1.ApiOkResponse)({ type: () => news_detail_admin_dto_1.NewsDetailAdminDto }),
    (0, common_1.UseInterceptors)((0, platform_express_1.FileInterceptor)('image', multer_config_1.multerConfig)),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.UploadedFile)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [news_create_admin_dto_1.NewsCreateAdminDto, Object]),
    __metadata("design:returntype", void 0)
], NewsAdminController.prototype, "create", null);
__decorate([
    (0, common_1.Patch)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Update news (image upload optional)' }),
    (0, swagger_1.ApiConsumes)('multipart/form-data'),
    (0, swagger_1.ApiBody)({
        schema: {
            type: 'object',
            properties: {
                title: { type: 'string', maxLength: 256 },
                content: { type: 'string' },
                date: { type: 'string', description: 'ISO timestamp' },
                image: {
                    type: 'string',
                    format: 'binary',
                    description: 'New image file (optional)',
                },
            },
        },
    }),
    (0, swagger_1.ApiOkResponse)({ type: () => news_detail_admin_dto_1.NewsDetailAdminDto }),
    (0, common_1.UseInterceptors)((0, platform_express_1.FileInterceptor)('image', multer_config_1.multerConfig)),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __param(2, (0, common_1.UploadedFile)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, news_update_admin_dto_1.NewsUpdateAdminDto, Object]),
    __metadata("design:returntype", void 0)
], NewsAdminController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Delete news' }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], NewsAdminController.prototype, "delete", null);
exports.NewsAdminController = NewsAdminController = __decorate([
    (0, swagger_1.ApiTags)('Admin / News'),
    (0, swagger_1.ApiBearerAuth)('Bearer'),
    (0, common_1.UseGuards)(roles_guard_1.RolesGuard),
    (0, roles_decorator_1.Roles)(user_entity_1.UserRole.ADMIN, user_entity_1.UserRole.SUPER_ADMIN),
    (0, common_1.Controller)('admin/news'),
    __metadata("design:paramtypes", [news_admin_service_1.NewsAdminService])
], NewsAdminController);
//# sourceMappingURL=news.admin.controller.js.map