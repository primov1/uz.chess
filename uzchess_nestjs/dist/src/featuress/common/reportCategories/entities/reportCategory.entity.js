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
exports.ReportCategory = void 0;
const typeorm_1 = require("typeorm");
const base_model_1 = require("../../../../core/base-model");
let ReportCategory = class ReportCategory extends base_model_1.BaseModel {
    title;
    order;
};
exports.ReportCategory = ReportCategory;
__decorate([
    (0, typeorm_1.Column)({ length: 64, unique: true }),
    __metadata("design:type", String)
], ReportCategory.prototype, "title", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", Number)
], ReportCategory.prototype, "order", void 0);
exports.ReportCategory = ReportCategory = __decorate([
    (0, typeorm_1.Entity)('reportCategories')
], ReportCategory);
//# sourceMappingURL=reportCategory.entity.js.map