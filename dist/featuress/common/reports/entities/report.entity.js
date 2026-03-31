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
exports.Report = exports.ReportType = void 0;
const typeorm_1 = require("typeorm");
const base_model_1 = require("../../../../core/base-model");
var ReportType;
(function (ReportType) {
    ReportType["BOOK"] = "book";
    ReportType["COURSE"] = "course";
})(ReportType || (exports.ReportType = ReportType = {}));
let Report = class Report extends base_model_1.BaseModel {
    reportCategoryId;
    target;
    targetId;
    description;
    date;
};
exports.Report = Report;
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], Report.prototype, "reportCategoryId", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'enum', enum: ReportType }),
    __metadata("design:type", String)
], Report.prototype, "target", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], Report.prototype, "targetId", void 0);
__decorate([
    (0, typeorm_1.Column)({ length: 256, nullable: true }),
    __metadata("design:type", String)
], Report.prototype, "description", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)({ type: 'timestamp' }),
    __metadata("design:type", Date)
], Report.prototype, "date", void 0);
exports.Report = Report = __decorate([
    (0, typeorm_1.Entity)('reports')
], Report);
//# sourceMappingURL=report.entity.js.map