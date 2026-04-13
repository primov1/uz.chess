"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.OtpCodeAdminService = void 0;
const common_1 = require("@nestjs/common");
const otpCode_entity_1 = require("../entities/otpCode.entity");
let OtpCodeAdminService = class OtpCodeAdminService {
    async getAll() {
        return otpCode_entity_1.OtpCode.find();
    }
    async create(payload) {
        const item = otpCode_entity_1.OtpCode.create(payload);
        return otpCode_entity_1.OtpCode.save(item);
    }
    async delete(id) {
        const item = await otpCode_entity_1.OtpCode.findOneBy({ id });
        if (!item)
            throw new common_1.NotFoundException('OtpCode with given id not found');
        await otpCode_entity_1.OtpCode.remove(item);
    }
};
exports.OtpCodeAdminService = OtpCodeAdminService;
exports.OtpCodeAdminService = OtpCodeAdminService = __decorate([
    (0, common_1.Injectable)()
], OtpCodeAdminService);
//# sourceMappingURL=otpCode.admin.service.js.map