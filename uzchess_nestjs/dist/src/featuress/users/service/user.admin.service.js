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
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserAdminService = void 0;
const common_1 = require("@nestjs/common");
const class_transformer_1 = require("class-transformer");
const bcrypt = __importStar(require("bcrypt"));
const user_entity_1 = require("../entities/user.entity");
const user_list_admin_dto_1 = require("../dtos/admin/user.list.admin.dto");
const user_detail_admin_dto_1 = require("../dtos/admin/user.detail.admin.dto");
let UserAdminService = class UserAdminService {
    async getAll() {
        const users = await user_entity_1.User.find();
        return (0, class_transformer_1.plainToInstance)(user_list_admin_dto_1.UserListAdminDto, users, {
            excludeExtraneousValues: true,
        });
    }
    async getOne(id) {
        const user = await user_entity_1.User.findOneBy({ id });
        if (!user)
            throw new common_1.NotFoundException('User with given id not found');
        return (0, class_transformer_1.plainToInstance)(user_detail_admin_dto_1.UserDetailAdminDto, user, {
            excludeExtraneousValues: true,
        });
    }
    async create(payload) {
        if (payload.password) {
            payload.password = await bcrypt.hash(payload.password, 10);
        }
        const user = user_entity_1.User.create(payload);
        return user_entity_1.User.save(user);
    }
    async update(id, payload) {
        const user = await user_entity_1.User.findOneBy({ id });
        if (!user)
            throw new common_1.NotFoundException('User with given id not found');
        if (payload.password) {
            payload.password = await bcrypt.hash(payload.password, 10);
        }
        Object.assign(user, Object.fromEntries(Object.entries(payload).filter(([, v]) => v !== undefined)));
        return user_entity_1.User.save(user);
    }
    async delete(id) {
        const user = await user_entity_1.User.findOneBy({ id });
        if (!user)
            throw new common_1.NotFoundException('User with given id not found');
        await user_entity_1.User.remove(user);
    }
};
exports.UserAdminService = UserAdminService;
exports.UserAdminService = UserAdminService = __decorate([
    (0, common_1.Injectable)()
], UserAdminService);
//# sourceMappingURL=user.admin.service.js.map