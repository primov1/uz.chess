"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthPublicService = void 0;
const common_1 = require("@nestjs/common");
const jwt_1 = require("@nestjs/jwt");
const bcrypt = __importStar(require("bcrypt"));
const user_entity_1 = require("../../users/entities/user.entity");
const otpCode_entity_1 = require("../../common/otpCodes/entities/otpCode.entity");
let AuthPublicService = class AuthPublicService {
    jwtService;
    constructor(jwtService) {
        this.jwtService = jwtService;
    }
    generateTokens(user) {
        const payload = {
            sub: user.id,
            login: user.login,
            role: user.role,
        };
        const accessToken = this.jwtService.sign(payload, { expiresIn: '3h' });
        const refreshToken = this.jwtService.sign(payload, { expiresIn: '7d' });
        return { accessToken, refreshToken };
    }
    async register(payload) {
        const existing = await user_entity_1.User.findOne({ where: { login: payload.login } });
        if (existing)
            throw new common_1.BadRequestException('Bu login allaqachon mavjud');
        const hashedPassword = await bcrypt.hash(payload.password, 10);
        const user = user_entity_1.User.create({
            ...payload,
            password: hashedPassword,
            isVerified: false,
            isActive: false,
        });
        await user.save();
        await otpCode_entity_1.OtpCode.delete({ userId: user.id, type: otpCode_entity_1.OtpType.REGISTER });
        const expiresAt = new Date(Date.now() + 5 * 60 * 1000);
        const otp = otpCode_entity_1.OtpCode.create({
            userId: user.id,
            code: Math.floor(100000 + Math.random() * 900000).toString(),
            type: otpCode_entity_1.OtpType.REGISTER,
            expiresAt,
        });
        await otp.save();
        console.log(`[OTP] Ro'yxatdan o'tish OTP: ${otp.code} → foydalanuvchi: ${user.login}`);
        return { message: 'OTP kod yuborildi', userId: user.id };
    }
    async verifyOtp(payload) {
        const user = await user_entity_1.User.findOne({ where: { login: payload.login } });
        if (!user)
            throw new common_1.NotFoundException('Foydalanuvchi topilmadi');
        const otp = await otpCode_entity_1.OtpCode.findOne({
            where: { userId: user.id, code: payload.code, type: payload.type },
        });
        if (!otp)
            throw new common_1.BadRequestException("OTP kod noto'g'ri yoki muddati tugagan");
        if (otp.expiresAt < new Date()) {
            await otp.remove();
            throw new common_1.BadRequestException("OTP kod muddati tugagan. Qaytadan so'rash kerak.");
        }
        if (payload.type === otpCode_entity_1.OtpType.REGISTER) {
            user.isVerified = true;
            user.isActive = true;
            await user.save();
        }
        await otp.remove();
        const tokens = this.generateTokens(user);
        return { message: 'Tasdiqlandi', ...tokens };
    }
    async login(payload) {
        const user = await user_entity_1.User.findOne({ where: { login: payload.login } });
        if (!user)
            throw new common_1.NotFoundException('Foydalanuvchi topilmadi');
        if (!user.isActive)
            throw new common_1.UnauthorizedException('Akkount faol emas. Iltimos, OTP orqali tasdiqlang.');
        const isPasswordValid = await bcrypt.compare(payload.password, user.password ?? '');
        if (!isPasswordValid)
            throw new common_1.UnauthorizedException("Parol noto'g'ri");
        return this.generateTokens(user);
    }
    async forgotPassword(payload) {
        const user = await user_entity_1.User.findOne({ where: { login: payload.login } });
        if (!user)
            throw new common_1.NotFoundException('Foydalanuvchi topilmadi');
        await otpCode_entity_1.OtpCode.delete({ userId: user.id, type: otpCode_entity_1.OtpType.PASSWORD_RESET });
        const expiresAt = new Date(Date.now() + 5 * 60 * 1000);
        const otp = otpCode_entity_1.OtpCode.create({
            userId: user.id,
            code: Math.floor(100000 + Math.random() * 900000).toString(),
            type: otpCode_entity_1.OtpType.PASSWORD_RESET,
            expiresAt,
        });
        await otp.save();
        return { message: 'Parolni tiklash OTP kodi yuborildi' };
    }
    async resetPassword(payload) {
        const user = await user_entity_1.User.findOne({ where: { login: payload.login } });
        if (!user)
            throw new common_1.NotFoundException('Foydalanuvchi topilmadi');
        const otp = await otpCode_entity_1.OtpCode.findOne({
            where: {
                userId: user.id,
                code: payload.code,
                type: otpCode_entity_1.OtpType.PASSWORD_RESET,
            },
        });
        if (!otp)
            throw new common_1.BadRequestException("OTP kod noto'g'ri");
        if (otp.expiresAt < new Date()) {
            await otp.remove();
            throw new common_1.BadRequestException("OTP kod muddati tugagan. Qaytadan so'rash kerak.");
        }
        user.password = await bcrypt.hash(payload.newPassword, 10);
        await user.save();
        await otp.remove();
        return { message: 'Parol muvaffaqiyatli yangilandi' };
    }
    async refreshToken(refreshToken) {
        try {
            const payload = this.jwtService.verify(refreshToken);
            const user = await user_entity_1.User.findOneBy({ id: payload.sub });
            if (!user || !user.isActive) {
                throw new common_1.UnauthorizedException('Foydalanuvchi topilmadi yoki faol emas');
            }
            return this.generateTokens(user);
        }
        catch {
            throw new common_1.UnauthorizedException('Refresh token yaroqsiz yoki muddati tugagan');
        }
    }
};
exports.AuthPublicService = AuthPublicService;
exports.AuthPublicService = AuthPublicService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [jwt_1.JwtService])
], AuthPublicService);
//# sourceMappingURL=auth.public.service.js.map