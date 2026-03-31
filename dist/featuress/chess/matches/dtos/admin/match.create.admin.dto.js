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
exports.MatchCreateAdminDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
const match_entity_1 = require("../../entities/match.entity");
class MatchCreateAdminDto {
    firstPlayerId;
    firstPlayerResult;
    secondPlayerId;
    secondPlayerResult;
    type;
    moves;
    date;
    winner;
}
exports.MatchCreateAdminDto = MatchCreateAdminDto;
__decorate([
    (0, class_validator_1.IsNumber)(),
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Number)
], MatchCreateAdminDto.prototype, "firstPlayerId", void 0);
__decorate([
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.Min)(0),
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Number)
], MatchCreateAdminDto.prototype, "firstPlayerResult", void 0);
__decorate([
    (0, class_validator_1.IsNumber)(),
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Number)
], MatchCreateAdminDto.prototype, "secondPlayerId", void 0);
__decorate([
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.Min)(0),
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Number)
], MatchCreateAdminDto.prototype, "secondPlayerResult", void 0);
__decorate([
    (0, class_validator_1.IsEnum)(match_entity_1.MatchType),
    (0, swagger_1.ApiProperty)({ enum: match_entity_1.MatchType }),
    __metadata("design:type", String)
], MatchCreateAdminDto.prototype, "type", void 0);
__decorate([
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.Min)(1),
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Number)
], MatchCreateAdminDto.prototype, "moves", void 0);
__decorate([
    (0, class_validator_1.IsDateString)(),
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], MatchCreateAdminDto.prototype, "date", void 0);
__decorate([
    (0, class_validator_1.IsEnum)(match_entity_1.WinnerType),
    (0, swagger_1.ApiProperty)({ enum: match_entity_1.WinnerType }),
    __metadata("design:type", String)
], MatchCreateAdminDto.prototype, "winner", void 0);
//# sourceMappingURL=match.create.admin.dto.js.map