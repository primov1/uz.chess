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
exports.NewsView = void 0;
const typeorm_1 = require("typeorm");
const base_model_1 = require("../../../../core/base-model");
let NewsView = class NewsView extends base_model_1.BaseModel {
    userId;
    newsId;
    firstDate;
    lastDate;
    count;
};
exports.NewsView = NewsView;
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], NewsView.prototype, "userId", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], NewsView.prototype, "newsId", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)({ type: 'timestamp' }),
    __metadata("design:type", Date)
], NewsView.prototype, "firstDate", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)({ type: 'timestamp' }),
    __metadata("design:type", Date)
], NewsView.prototype, "lastDate", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: 1 }),
    __metadata("design:type", Number)
], NewsView.prototype, "count", void 0);
exports.NewsView = NewsView = __decorate([
    (0, typeorm_1.Entity)('newsViews')
], NewsView);
//# sourceMappingURL=newsView.entity.js.map