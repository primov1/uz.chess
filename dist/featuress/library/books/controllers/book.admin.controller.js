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
exports.BookAdminController = void 0;
const common_1 = require("@nestjs/common");
const platform_express_1 = require("@nestjs/platform-express");
const swagger_1 = require("@nestjs/swagger");
const roles_decorator_1 = require("../../../auth/decorators/roles.decorator");
const roles_guard_1 = require("../../../auth/guards/roles.guard");
const user_entity_1 = require("../../../users/entities/user.entity");
const book_admin_service_1 = require("../service/book.admin.service");
const book_list_admin_dto_1 = require("../dtos/admin/book.list.admin.dto");
const book_detail_admin_dto_1 = require("../dtos/admin/book.detail.admin.dto");
const book_create_admin_dto_1 = require("../dtos/admin/book.create.admin.dto");
const book_update_admin_dto_1 = require("../dtos/admin/book.update.admin.dto");
const multer_config_1 = require("../../../upload/multer.config");
let BookAdminController = class BookAdminController {
    bookAdminService;
    constructor(bookAdminService) {
        this.bookAdminService = bookAdminService;
    }
    getAll() {
        return this.bookAdminService.getAll();
    }
    getOne(id) {
        return this.bookAdminService.getOne(id);
    }
    create(payload, file) {
        if (file)
            payload.image = `/uploads/${file.filename}`;
        return this.bookAdminService.create(payload);
    }
    update(id, payload, file) {
        if (file)
            payload.image = `/uploads/${file.filename}`;
        return this.bookAdminService.update(id, payload);
    }
    delete(id) {
        return this.bookAdminService.delete(id);
    }
};
exports.BookAdminController = BookAdminController;
__decorate([
    (0, common_1.Get)(),
    (0, swagger_1.ApiOperation)({ summary: 'Get all books' }),
    (0, swagger_1.ApiOkResponse)({ type: () => book_list_admin_dto_1.BookListAdminDto, isArray: true }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], BookAdminController.prototype, "getAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Get book by id' }),
    (0, swagger_1.ApiOkResponse)({ type: () => book_detail_admin_dto_1.BookDetailAdminDto }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], BookAdminController.prototype, "getOne", null);
__decorate([
    (0, common_1.Post)(),
    (0, swagger_1.ApiOperation)({ summary: 'Create book (image upload optional)' }),
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
                'description',
                'price',
                'pages',
                'pubDate',
            ],
            properties: {
                authorId: { type: 'number' },
                categoryId: { type: 'number' },
                languageId: { type: 'number' },
                difficultyId: { type: 'number' },
                title: { type: 'string', maxLength: 128 },
                description: { type: 'string' },
                image: {
                    type: 'string',
                    format: 'binary',
                    description: 'Book cover image (optional)',
                },
                price: { type: 'number' },
                newPrice: { type: 'number' },
                pages: { type: 'number' },
                pubDate: { type: 'string', description: 'ISO date' },
            },
        },
    }),
    (0, swagger_1.ApiOkResponse)({ type: () => book_detail_admin_dto_1.BookDetailAdminDto }),
    (0, common_1.UseInterceptors)((0, platform_express_1.FileInterceptor)('image', multer_config_1.multerConfig)),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.UploadedFile)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [book_create_admin_dto_1.BookCreateAdminDto, Object]),
    __metadata("design:returntype", void 0)
], BookAdminController.prototype, "create", null);
__decorate([
    (0, common_1.Patch)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Update book (image upload optional)' }),
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
                description: { type: 'string' },
                image: {
                    type: 'string',
                    format: 'binary',
                    description: 'New cover image (optional)',
                },
                price: { type: 'number' },
                newPrice: { type: 'number' },
                pages: { type: 'number' },
                pubDate: { type: 'string' },
            },
        },
    }),
    (0, swagger_1.ApiOkResponse)({ type: () => book_detail_admin_dto_1.BookDetailAdminDto }),
    (0, common_1.UseInterceptors)((0, platform_express_1.FileInterceptor)('image', multer_config_1.multerConfig)),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __param(2, (0, common_1.UploadedFile)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, book_update_admin_dto_1.BookUpdateAdminDto, Object]),
    __metadata("design:returntype", void 0)
], BookAdminController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Delete book' }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], BookAdminController.prototype, "delete", null);
exports.BookAdminController = BookAdminController = __decorate([
    (0, swagger_1.ApiTags)('Admin / Books'),
    (0, swagger_1.ApiBearerAuth)('Bearer'),
    (0, common_1.UseGuards)(roles_guard_1.RolesGuard),
    (0, roles_decorator_1.Roles)(user_entity_1.UserRole.ADMIN, user_entity_1.UserRole.SUPER_ADMIN),
    (0, common_1.Controller)('admin/books'),
    __metadata("design:paramtypes", [book_admin_service_1.BookAdminService])
], BookAdminController);
//# sourceMappingURL=book.admin.controller.js.map