"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReportCategoryModule = void 0;
const common_1 = require("@nestjs/common");
const reportCategory_admin_controller_1 = require("./controllers/reportCategory.admin.controller");
const reportCategory_public_controller_1 = require("./controllers/reportCategory.public.controller");
const reportCategory_admin_service_1 = require("./service/reportCategory.admin.service");
const reportCategory_public_service_1 = require("./service/reportCategory.public.service");
let ReportCategoryModule = class ReportCategoryModule {
};
exports.ReportCategoryModule = ReportCategoryModule;
exports.ReportCategoryModule = ReportCategoryModule = __decorate([
    (0, common_1.Module)({
        controllers: [reportCategory_admin_controller_1.ReportCategoryAdminController, reportCategory_public_controller_1.ReportCategoryPublicController],
        providers: [reportCategory_admin_service_1.ReportCategoryAdminService, reportCategory_public_service_1.ReportCategoryPublicService],
    })
], ReportCategoryModule);
//# sourceMappingURL=reportCategory.module.js.map