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
exports.Player = void 0;
const typeorm_1 = require("typeorm");
const base_model_1 = require("../../../../core/base-model");
let Player = class Player extends base_model_1.BaseModel {
    countryId;
    fullName;
    image;
    classic;
    rapid;
    blitz;
};
exports.Player = Player;
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], Player.prototype, "countryId", void 0);
__decorate([
    (0, typeorm_1.Column)({ length: 64 }),
    __metadata("design:type", String)
], Player.prototype, "fullName", void 0);
__decorate([
    (0, typeorm_1.Column)({ length: 128, nullable: true }),
    __metadata("design:type", String)
], Player.prototype, "image", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", Number)
], Player.prototype, "classic", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", Number)
], Player.prototype, "rapid", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", Number)
], Player.prototype, "blitz", void 0);
exports.Player = Player = __decorate([
    (0, typeorm_1.Entity)('players')
], Player);
//# sourceMappingURL=player.entity.js.map