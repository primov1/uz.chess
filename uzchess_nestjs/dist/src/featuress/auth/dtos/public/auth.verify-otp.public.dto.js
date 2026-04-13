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
exports.AuthVerifyOtpPublicDto = void 0;
const class_validator_1 = require("class-validator");
const swagger_1 = require("@nestjs/swagger");
const otpCode_entity_1 = require("../../../common/otpCodes/entities/otpCode.entity");
class AuthVerifyOtpPublicDto {
    login;
    code;
    type;
}
exports.AuthVerifyOtpPublicDto = AuthVerifyOtpPublicDto;
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.MaxLength)(64),
    (0, swagger_1.ApiProperty)({ example: 'ali@example.com' }),
    __metadata("design:type", String)
], AuthVerifyOtpPublicDto.prototype, "login", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Length)(6, 6),
    (0, swagger_1.ApiProperty)({ example: '123456' }),
    __metadata("design:type", String)
], AuthVerifyOtpPublicDto.prototype, "code", void 0);
__decorate([
    (0, class_validator_1.IsEnum)(otpCode_entity_1.OtpType),
    (0, swagger_1.ApiProperty)({ enum: otpCode_entity_1.OtpType }),
    __metadata("design:type", String)
], AuthVerifyOtpPublicDto.prototype, "type", void 0);
//# sourceMappingURL=auth.verify-otp.public.dto.js.map