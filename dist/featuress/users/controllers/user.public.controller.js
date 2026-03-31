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
exports.UserPublicController = void 0;
const common_1 = require("@nestjs/common");
const platform_express_1 = require("@nestjs/platform-express");
const swagger_1 = require("@nestjs/swagger");
const user_public_service_1 = require("../service/user.public.service");
const user_detail_public_dto_1 = require("../dtos/public/user.detail.public.dto");
const user_update_public_dto_1 = require("../dtos/public/user.update.public.dto");
const multer_config_1 = require("../../upload/multer.config");
let UserPublicController = class UserPublicController {
    service;
    constructor(service) {
        this.service = service;
    }
    getMe(id) {
        return this.service.getMe(id);
    }
    update(id, payload, file) {
        if (file)
            payload.profileImage = `/uploads/${file.filename}`;
        return this.service.update(id, payload);
    }
};
exports.UserPublicController = UserPublicController;
__decorate([
    (0, common_1.Get)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Get my profile' }),
    (0, swagger_1.ApiOkResponse)({ type: () => user_detail_public_dto_1.UserDetailPublicDto }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], UserPublicController.prototype, "getMe", null);
__decorate([
    (0, common_1.Patch)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Update my profile (profileImage upload optional)' }),
    (0, swagger_1.ApiConsumes)('multipart/form-data'),
    (0, swagger_1.ApiBody)({
        schema: {
            type: 'object',
            properties: {
                fullName: { type: 'string', maxLength: 64 },
                profileImage: {
                    type: 'string',
                    format: 'binary',
                    description: 'Profile photo (optional)',
                },
                password: { type: 'string', maxLength: 128 },
                birthDate: { type: 'string', description: 'ISO date' },
            },
        },
    }),
    (0, swagger_1.ApiOkResponse)({ type: () => user_detail_public_dto_1.UserDetailPublicDto }),
    (0, common_1.UseInterceptors)((0, platform_express_1.FileInterceptor)('profileImage', multer_config_1.multerConfig)),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __param(2, (0, common_1.UploadedFile)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, user_update_public_dto_1.UserUpdatePublicDto, Object]),
    __metadata("design:returntype", void 0)
], UserPublicController.prototype, "update", null);
exports.UserPublicController = UserPublicController = __decorate([
    (0, swagger_1.ApiTags)('Public / Users'),
    (0, common_1.Controller)('public/users'),
    __metadata("design:paramtypes", [user_public_service_1.UserPublicService])
], UserPublicController);
//# sourceMappingURL=user.public.controller.js.map