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
exports.UserCreateAdminDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
const user_entity_1 = require("../../entities/user.entity");
class UserCreateAdminDto {
    role;
    fullName;
    profileImage;
    login;
    loginType;
    password;
    birthDate;
}
exports.UserCreateAdminDto = UserCreateAdminDto;
__decorate([
    (0, class_validator_1.IsEnum)(user_entity_1.UserRole),
    (0, class_validator_1.IsOptional)(),
    (0, swagger_1.ApiPropertyOptional)({ enum: user_entity_1.UserRole }),
    __metadata("design:type", String)
], UserCreateAdminDto.prototype, "role", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.MaxLength)(64),
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], UserCreateAdminDto.prototype, "fullName", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.MaxLength)(128),
    (0, class_validator_1.IsOptional)(),
    (0, swagger_1.ApiPropertyOptional)({
        description: 'Profile image path — set automatically if file uploaded',
    }),
    __metadata("design:type", String)
], UserCreateAdminDto.prototype, "profileImage", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.MaxLength)(64),
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], UserCreateAdminDto.prototype, "login", void 0);
__decorate([
    (0, class_validator_1.IsEnum)(user_entity_1.LoginType),
    (0, swagger_1.ApiProperty)({ enum: user_entity_1.LoginType }),
    __metadata("design:type", String)
], UserCreateAdminDto.prototype, "loginType", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.MaxLength)(128),
    (0, class_validator_1.IsOptional)(),
    (0, swagger_1.ApiPropertyOptional)(),
    __metadata("design:type", String)
], UserCreateAdminDto.prototype, "password", void 0);
__decorate([
    (0, class_validator_1.IsDateString)(),
    (0, class_validator_1.IsOptional)(),
    (0, swagger_1.ApiPropertyOptional)(),
    __metadata("design:type", String)
], UserCreateAdminDto.prototype, "birthDate", void 0);
//# sourceMappingURL=user.create.admin.dto.js.map