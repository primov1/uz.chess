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
exports.MatchAdminController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const roles_decorator_1 = require("../../../auth/decorators/roles.decorator");
const roles_guard_1 = require("../../../auth/guards/roles.guard");
const user_entity_1 = require("../../../users/entities/user.entity");
const match_admin_service_1 = require("../service/match.admin.service");
const match_list_admin_dto_1 = require("../dtos/admin/match.list.admin.dto");
const match_detail_admin_dto_1 = require("../dtos/admin/match.detail.admin.dto");
const match_create_admin_dto_1 = require("../dtos/admin/match.create.admin.dto");
const match_update_admin_dto_1 = require("../dtos/admin/match.update.admin.dto");
let MatchAdminController = class MatchAdminController {
    matchAdminService;
    constructor(matchAdminService) {
        this.matchAdminService = matchAdminService;
    }
    getAll() {
        return this.matchAdminService.getAll();
    }
    getOne(id) {
        return this.matchAdminService.getOne(id);
    }
    create(payload) {
        return this.matchAdminService.create(payload);
    }
    update(id, payload) {
        return this.matchAdminService.update(id, payload);
    }
    delete(id) {
        return this.matchAdminService.delete(id);
    }
};
exports.MatchAdminController = MatchAdminController;
__decorate([
    (0, common_1.Get)(),
    (0, swagger_1.ApiOperation)({ summary: 'Get all matches' }),
    (0, swagger_1.ApiOkResponse)({ type: () => match_list_admin_dto_1.MatchListAdminDto, isArray: true }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], MatchAdminController.prototype, "getAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Get match by id' }),
    (0, swagger_1.ApiOkResponse)({ type: () => match_detail_admin_dto_1.MatchDetailAdminDto }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], MatchAdminController.prototype, "getOne", null);
__decorate([
    (0, common_1.Post)(),
    (0, swagger_1.ApiOperation)({ summary: 'Create match' }),
    (0, swagger_1.ApiOkResponse)({ type: () => match_detail_admin_dto_1.MatchDetailAdminDto }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [match_create_admin_dto_1.MatchCreateAdminDto]),
    __metadata("design:returntype", void 0)
], MatchAdminController.prototype, "create", null);
__decorate([
    (0, common_1.Patch)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Update match' }),
    (0, swagger_1.ApiOkResponse)({ type: () => match_detail_admin_dto_1.MatchDetailAdminDto }),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, match_update_admin_dto_1.MatchUpdateAdminDto]),
    __metadata("design:returntype", void 0)
], MatchAdminController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Delete match' }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], MatchAdminController.prototype, "delete", null);
exports.MatchAdminController = MatchAdminController = __decorate([
    (0, swagger_1.ApiTags)('Admin / Matches'),
    (0, swagger_1.ApiBearerAuth)('Bearer'),
    (0, common_1.UseGuards)(roles_guard_1.RolesGuard),
    (0, roles_decorator_1.Roles)(user_entity_1.UserRole.ADMIN, user_entity_1.UserRole.SUPER_ADMIN),
    (0, common_1.Controller)('admin/matches'),
    __metadata("design:paramtypes", [match_admin_service_1.MatchAdminService])
], MatchAdminController);
//# sourceMappingURL=match.admin.controller.js.map