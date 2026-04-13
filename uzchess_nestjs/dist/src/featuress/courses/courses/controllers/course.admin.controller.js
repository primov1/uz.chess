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
exports.CourseAdminController = void 0;
const common_1 = require("@nestjs/common");
const platform_express_1 = require("@nestjs/platform-express");
const swagger_1 = require("@nestjs/swagger");
const roles_decorator_1 = require("../../../auth/decorators/roles.decorator");
const roles_guard_1 = require("../../../auth/guards/roles.guard");
const user_entity_1 = require("../../../users/entities/user.entity");
const course_admin_service_1 = require("../service/course.admin.service");
const course_list_admin_dto_1 = require("../dtos/admin/course.list.admin.dto");
const course_detail_admin_dto_1 = require("../dtos/admin/course.detail.admin.dto");
const course_create_admin_dto_1 = require("../dtos/admin/course.create.admin.dto");
const course_update_admin_dto_1 = require("../dtos/admin/course.update.admin.dto");
const multer_config_1 = require("../../../upload/multer.config");
let CourseAdminController = class CourseAdminController {
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
exports.CourseAdminController = CourseAdminController;
__decorate([
    (0, common_1.Get)(),
    (0, swagger_1.ApiOperation)({ summary: 'Get all' }),
    (0, swagger_1.ApiOkResponse)({ type: () => course_list_admin_dto_1.CourseListAdminDto, isArray: true }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], CourseAdminController.prototype, "getAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Get by id' }),
    (0, swagger_1.ApiOkResponse)({ type: () => course_detail_admin_dto_1.CourseDetailAdminDto }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], CourseAdminController.prototype, "getOne", null);
__decorate([
    (0, common_1.Post)(),
    (0, swagger_1.ApiOperation)({ summary: 'Create course (image upload optional)' }),
    (0, swagger_1.ApiConsumes)('multipart/form-data'),
    (0, swagger_1.ApiBody)({
        schema: {
            type: 'object',
            required: [
                'authorId',
                'categoryId',
                'languageId',
                'difficultyId',
                'title',
                'price',
            ],
            properties: {
                authorId: { type: 'number' },
                categoryId: { type: 'number' },
                languageId: { type: 'number' },
                difficultyId: { type: 'number' },
                title: { type: 'string', maxLength: 128 },
                image: {
                    type: 'string',
                    format: 'binary',
                    description: 'Course cover image (optional)',
                },
                price: { type: 'number' },
                newPrice: { type: 'number' },
            },
        },
    }),
    (0, swagger_1.ApiOkResponse)({ type: () => course_detail_admin_dto_1.CourseDetailAdminDto }),
    (0, common_1.UseInterceptors)((0, platform_express_1.FileInterceptor)('image', multer_config_1.multerConfig)),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.UploadedFile)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [course_create_admin_dto_1.CourseCreateAdminDto, Object]),
    __metadata("design:returntype", void 0)
], CourseAdminController.prototype, "create", null);
__decorate([
    (0, common_1.Patch)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Update course (image upload optional)' }),
    (0, swagger_1.ApiConsumes)('multipart/form-data'),
    (0, swagger_1.ApiBody)({
        schema: {
            type: 'object',
            properties: {
                authorId: { type: 'number' },
                categoryId: { type: 'number' },
                languageId: { type: 'number' },
                difficultyId: { type: 'number' },
                title: { type: 'string', maxLength: 128 },
                image: {
                    type: 'string',
                    format: 'binary',
                    description: 'New cover image (optional)',
                },
                price: { type: 'number' },
                newPrice: { type: 'number' },
            },
        },
    }),
    (0, swagger_1.ApiOkResponse)({ type: () => course_detail_admin_dto_1.CourseDetailAdminDto }),
    (0, common_1.UseInterceptors)((0, platform_express_1.FileInterceptor)('image', multer_config_1.multerConfig)),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __param(2, (0, common_1.UploadedFile)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, course_update_admin_dto_1.CourseUpdateAdminDto, Object]),
    __metadata("design:returntype", void 0)
], CourseAdminController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Delete' }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], CourseAdminController.prototype, "delete", null);
exports.CourseAdminController = CourseAdminController = __decorate([
    (0, swagger_1.ApiTags)('Admin / Courses'),
    (0, swagger_1.ApiBearerAuth)('Bearer'),
    (0, common_1.UseGuards)(roles_guard_1.RolesGuard),
    (0, roles_decorator_1.Roles)(user_entity_1.UserRole.ADMIN, user_entity_1.UserRole.SUPER_ADMIN),
    (0, common_1.Controller)('admin/courses'),
    __metadata("design:paramtypes", [course_admin_service_1.CourseAdminService])
], CourseAdminController);
//# sourceMappingURL=course.admin.controller.js.map