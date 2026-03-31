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
exports.CourseLessonAdminController = void 0;
const common_1 = require("@nestjs/common");
const platform_express_1 = require("@nestjs/platform-express");
const swagger_1 = require("@nestjs/swagger");
const roles_decorator_1 = require("../../../auth/decorators/roles.decorator");
const roles_guard_1 = require("../../../auth/guards/roles.guard");
const user_entity_1 = require("../../../users/entities/user.entity");
const courseLesson_admin_service_1 = require("../service/courseLesson.admin.service");
const courseLesson_list_admin_dto_1 = require("../dtos/admin/courseLesson.list.admin.dto");
const courseLesson_detail_admin_dto_1 = require("../dtos/admin/courseLesson.detail.admin.dto");
const courseLesson_create_admin_dto_1 = require("../dtos/admin/courseLesson.create.admin.dto");
const courseLesson_update_admin_dto_1 = require("../dtos/admin/courseLesson.update.admin.dto");
const multer_config_1 = require("../../../upload/multer.config");
let CourseLessonAdminController = class CourseLessonAdminController {
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
    create(payload, files) {
        if (files?.thumbnail?.[0])
            payload.thumbnail = `/uploads/${files.thumbnail[0].filename}`;
        if (files?.video?.[0])
            payload.video = `/uploads/${files.video[0].filename}`;
        return this.service.create(payload);
    }
    update(id, payload, files) {
        if (files?.thumbnail?.[0])
            payload.thumbnail = `/uploads/${files.thumbnail[0].filename}`;
        if (files?.video?.[0])
            payload.video = `/uploads/${files.video[0].filename}`;
        return this.service.update(id, payload);
    }
    delete(id) {
        return this.service.delete(id);
    }
};
exports.CourseLessonAdminController = CourseLessonAdminController;
__decorate([
    (0, common_1.Get)(),
    (0, swagger_1.ApiOperation)({ summary: 'Get all' }),
    (0, swagger_1.ApiOkResponse)({ type: () => courseLesson_list_admin_dto_1.CourseLessonListAdminDto, isArray: true }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], CourseLessonAdminController.prototype, "getAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Get by id' }),
    (0, swagger_1.ApiOkResponse)({ type: () => courseLesson_detail_admin_dto_1.CourseLessonDetailAdminDto }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], CourseLessonAdminController.prototype, "getOne", null);
__decorate([
    (0, common_1.Post)(),
    (0, swagger_1.ApiOperation)({
        summary: 'Create lesson (thumbnail & video upload optional)',
    }),
    (0, swagger_1.ApiConsumes)('multipart/form-data'),
    (0, swagger_1.ApiBody)({
        schema: {
            type: 'object',
            required: ['courseId', 'courseSectionId', 'title', 'video'],
            properties: {
                courseId: { type: 'number' },
                courseSectionId: { type: 'number' },
                title: { type: 'string', maxLength: 128 },
                content: { type: 'string' },
                thumbnail: {
                    type: 'string',
                    format: 'binary',
                    description: 'Thumbnail image (optional)',
                },
                video: {
                    type: 'string',
                    format: 'binary',
                    description: 'Video file (optional)',
                },
                order: { type: 'number' },
                isFree: { type: 'boolean' },
            },
        },
    }),
    (0, swagger_1.ApiOkResponse)({ type: () => courseLesson_detail_admin_dto_1.CourseLessonDetailAdminDto }),
    (0, common_1.UseInterceptors)((0, platform_express_1.FileFieldsInterceptor)([
        { name: 'thumbnail', maxCount: 1 },
        { name: 'video', maxCount: 1 },
    ], multer_config_1.multerMixedConfig)),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.UploadedFiles)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [courseLesson_create_admin_dto_1.CourseLessonCreateAdminDto, Object]),
    __metadata("design:returntype", void 0)
], CourseLessonAdminController.prototype, "create", null);
__decorate([
    (0, common_1.Patch)(':id'),
    (0, swagger_1.ApiOperation)({
        summary: 'Update lesson (thumbnail & video upload optional)',
    }),
    (0, swagger_1.ApiConsumes)('multipart/form-data'),
    (0, swagger_1.ApiBody)({
        schema: {
            type: 'object',
            properties: {
                courseId: { type: 'number' },
                courseSectionId: { type: 'number' },
                title: { type: 'string', maxLength: 128 },
                content: { type: 'string' },
                thumbnail: {
                    type: 'string',
                    format: 'binary',
                    description: 'New thumbnail image (optional)',
                },
                video: {
                    type: 'string',
                    format: 'binary',
                    description: 'New video file (optional)',
                },
                order: { type: 'number' },
                isFree: { type: 'boolean' },
            },
        },
    }),
    (0, swagger_1.ApiOkResponse)({ type: () => courseLesson_detail_admin_dto_1.CourseLessonDetailAdminDto }),
    (0, common_1.UseInterceptors)((0, platform_express_1.FileFieldsInterceptor)([
        { name: 'thumbnail', maxCount: 1 },
        { name: 'video', maxCount: 1 },
    ], multer_config_1.multerMixedConfig)),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __param(2, (0, common_1.UploadedFiles)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, courseLesson_update_admin_dto_1.CourseLessonUpdateAdminDto, Object]),
    __metadata("design:returntype", void 0)
], CourseLessonAdminController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Delete' }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], CourseLessonAdminController.prototype, "delete", null);
exports.CourseLessonAdminController = CourseLessonAdminController = __decorate([
    (0, swagger_1.ApiTags)('Admin / Course Lessons'),
    (0, swagger_1.ApiBearerAuth)('Bearer'),
    (0, common_1.UseGuards)(roles_guard_1.RolesGuard),
    (0, roles_decorator_1.Roles)(user_entity_1.UserRole.ADMIN, user_entity_1.UserRole.SUPER_ADMIN),
    (0, common_1.Controller)('admin/course-lessons'),
    __metadata("design:paramtypes", [courseLesson_admin_service_1.CourseLessonAdminService])
], CourseLessonAdminController);
//# sourceMappingURL=courseLesson.admin.controller.js.map