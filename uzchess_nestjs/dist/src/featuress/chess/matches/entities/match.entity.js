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
exports.Match = exports.WinnerType = exports.MatchType = void 0;
const typeorm_1 = require("typeorm");
const base_model_1 = require("../../../../core/base-model");
const player_entity_1 = require("../../players/entities/player.entity");
var MatchType;
(function (MatchType) {
    MatchType["CLASSIC"] = "classic";
    MatchType["RAPID"] = "rapid";
    MatchType["BLITZ"] = "blitz";
})(MatchType || (exports.MatchType = MatchType = {}));
var WinnerType;
(function (WinnerType) {
    WinnerType["FIRST"] = "first";
    WinnerType["SECOND"] = "second";
    WinnerType["DRAW"] = "draw";
})(WinnerType || (exports.WinnerType = WinnerType = {}));
let Match = class Match extends base_model_1.BaseModel {
    firstPlayerId;
    firstPlayerResult;
    secondPlayerId;
    secondPlayerResult;
    type;
    moves;
    date;
    winner;
    firstPlayer;
    secondPlayer;
};
exports.Match = Match;
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], Match.prototype, "firstPlayerId", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], Match.prototype, "firstPlayerResult", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], Match.prototype, "secondPlayerId", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], Match.prototype, "secondPlayerResult", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'enum', enum: MatchType }),
    __metadata("design:type", String)
], Match.prototype, "type", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], Match.prototype, "moves", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'date' }),
    __metadata("design:type", String)
], Match.prototype, "date", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'enum', enum: WinnerType }),
    __metadata("design:type", String)
], Match.prototype, "winner", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => player_entity_1.Player, { onDelete: 'RESTRICT', eager: false }),
    (0, typeorm_1.JoinColumn)({ name: 'firstPlayerId' }),
    __metadata("design:type", player_entity_1.Player)
], Match.prototype, "firstPlayer", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => player_entity_1.Player, { onDelete: 'RESTRICT', eager: false }),
    (0, typeorm_1.JoinColumn)({ name: 'secondPlayerId' }),
    __metadata("design:type", player_entity_1.Player)
], Match.prototype, "secondPlayer", void 0);
exports.Match = Match = __decorate([
    (0, typeorm_1.Entity)('matches')
], Match);
//# sourceMappingURL=match.entity.js.map