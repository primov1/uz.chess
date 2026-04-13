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
exports.OtpCode = exports.OtpType = void 0;
const typeorm_1 = require("typeorm");
const base_model_1 = require("../../../../core/base-model");
const user_entity_1 = require("../../../users/entities/user.entity");
var OtpType;
(function (OtpType) {
    OtpType["REGISTER"] = "register";
    OtpType["PASSWORD_RESET"] = "passwordReset";
    OtpType["NUMBER_CHANGE"] = "numberChange";
})(OtpType || (exports.OtpType = OtpType = {}));
let OtpCode = class OtpCode extends base_model_1.BaseModel {
    userId;
    code;
    expiresAt;
    type;
    user;
};
exports.OtpCode = OtpCode;
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], OtpCode.prototype, "userId", void 0);
__decorate([
    (0, typeorm_1.Column)({ length: 6 }),
    __metadata("design:type", String)
], OtpCode.prototype, "code", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'timestamp' }),
    __metadata("design:type", Date)
], OtpCode.prototype, "expiresAt", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'enum', enum: OtpType }),
    __metadata("design:type", String)
], OtpCode.prototype, "type", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => user_entity_1.User, { onDelete: 'CASCADE', eager: false }),
    (0, typeorm_1.JoinColumn)({ name: 'userId' }),
    __metadata("design:type", user_entity_1.User)
], OtpCode.prototype, "user", void 0);
exports.OtpCode = OtpCode = __decorate([
    (0, typeorm_1.Entity)('otpCodes')
], OtpCode);
//# sourceMappingURL=otpCode.entity.js.map