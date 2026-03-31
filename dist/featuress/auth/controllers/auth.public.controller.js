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
exports.AuthPublicController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const auth_public_service_1 = require("../services/auth.public.service");
const auth_register_public_dto_1 = require("../dtos/public/auth.register.public.dto");
const auth_login_public_dto_1 = require("../dtos/public/auth.login.public.dto");
const auth_verify_otp_public_dto_1 = require("../dtos/public/auth.verify-otp.public.dto");
const auth_forgot_password_public_dto_1 = require("../dtos/public/auth.forgot-password.public.dto");
const auth_reset_password_public_dto_1 = require("../dtos/public/auth.reset-password.public.dto");
const auth_token_public_dto_1 = require("../dtos/public/auth.token.public.dto");
const public_decorator_1 = require("../decorators/public.decorator");
let AuthPublicController = class AuthPublicController {
    authService;
    constructor(authService) {
        this.authService = authService;
    }
    register(payload) {
        return this.authService.register(payload);
    }
    verifyOtp(payload) {
        return this.authService.verifyOtp(payload);
    }
    login(payload) {
        return this.authService.login(payload);
    }
    forgotPassword(payload) {
        return this.authService.forgotPassword(payload);
    }
    resetPassword(payload) {
        return this.authService.resetPassword(payload);
    }
    refreshToken(refreshToken) {
        return this.authService.refreshToken(refreshToken);
    }
};
exports.AuthPublicController = AuthPublicController;
__decorate([
    (0, public_decorator_1.Public)(),
    (0, common_1.Post)('register'),
    (0, swagger_1.ApiOkResponse)({ description: "Ro'yxatdan o'tish — OTP yuboriladi" }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [auth_register_public_dto_1.AuthRegisterPublicDto]),
    __metadata("design:returntype", void 0)
], AuthPublicController.prototype, "register", null);
__decorate([
    (0, public_decorator_1.Public)(),
    (0, common_1.Post)('verify-otp'),
    (0, swagger_1.ApiOkResponse)({ type: auth_token_public_dto_1.AuthTokenPublicDto, description: 'OTP tasdiqlash' }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [auth_verify_otp_public_dto_1.AuthVerifyOtpPublicDto]),
    __metadata("design:returntype", void 0)
], AuthPublicController.prototype, "verifyOtp", null);
__decorate([
    (0, public_decorator_1.Public)(),
    (0, common_1.Post)('login'),
    (0, swagger_1.ApiOkResponse)({ type: auth_token_public_dto_1.AuthTokenPublicDto, description: 'Login' }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [auth_login_public_dto_1.AuthLoginPublicDto]),
    __metadata("design:returntype", void 0)
], AuthPublicController.prototype, "login", null);
__decorate([
    (0, public_decorator_1.Public)(),
    (0, common_1.Post)('forgot-password'),
    (0, swagger_1.ApiOkResponse)({ description: 'Parolni unutish — OTP yuboriladi' }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [auth_forgot_password_public_dto_1.AuthForgotPasswordPublicDto]),
    __metadata("design:returntype", void 0)
], AuthPublicController.prototype, "forgotPassword", null);
__decorate([
    (0, public_decorator_1.Public)(),
    (0, common_1.Post)('reset-password'),
    (0, swagger_1.ApiOkResponse)({ description: 'Parolni tiklash' }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [auth_reset_password_public_dto_1.AuthResetPasswordPublicDto]),
    __metadata("design:returntype", void 0)
], AuthPublicController.prototype, "resetPassword", null);
__decorate([
    (0, public_decorator_1.Public)(),
    (0, common_1.Post)('refresh-token'),
    (0, swagger_1.ApiOkResponse)({ type: auth_token_public_dto_1.AuthTokenPublicDto, description: 'Token yangilash' }),
    __param(0, (0, common_1.Body)('refreshToken')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], AuthPublicController.prototype, "refreshToken", null);
exports.AuthPublicController = AuthPublicController = __decorate([
    (0, swagger_1.ApiTags)('Auth'),
    (0, common_1.Controller)('auth'),
    __metadata("design:paramtypes", [auth_public_service_1.AuthPublicService])
], AuthPublicController);
//# sourceMappingURL=auth.public.controller.js.map