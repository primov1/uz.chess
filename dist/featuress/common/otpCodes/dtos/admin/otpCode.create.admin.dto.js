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
exports.OtpCodeCreateAdminDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
const otpCode_entity_1 = require("../../entities/otpCode.entity");
class OtpCodeCreateAdminDto {
    userId;
    code;
    type;
    expiresAt;
}
exports.OtpCodeCreateAdminDto = OtpCodeCreateAdminDto;
__decorate([
    (0, class_validator_1.IsNumber)(),
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Number)
], OtpCodeCreateAdminDto.prototype, "userId", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Length)(6, 6),
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], OtpCodeCreateAdminDto.prototype, "code", void 0);
__decorate([
    (0, class_validator_1.IsEnum)(otpCode_entity_1.OtpType),
    (0, swagger_1.ApiProperty)({ enum: otpCode_entity_1.OtpType }),
    __metadata("design:type", String)
], OtpCodeCreateAdminDto.prototype, "type", void 0);
__decorate([
    (0, class_validator_1.IsDateString)(),
    (0, swagger_1.ApiProperty)({ description: 'OTP expiration timestamp' }),
    __metadata("design:type", String)
], OtpCodeCreateAdminDto.prototype, "expiresAt", void 0);
//# sourceMappingURL=otpCode.create.admin.dto.js.map