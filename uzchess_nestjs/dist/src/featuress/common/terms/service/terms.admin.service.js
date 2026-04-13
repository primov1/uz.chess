"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TermsAdminService = void 0;
const common_1 = require("@nestjs/common");
const terms_entity_1 = require("../entities/terms.entity");
let TermsAdminService = class TermsAdminService {
    async get() {
        const terms = await terms_entity_1.Terms.findOneBy({ id: 1 });
        if (!terms)
            throw new common_1.NotFoundException('Terms not found');
        return terms;
    }
    async update(payload) {
        let terms = await terms_entity_1.Terms.findOneBy({ id: 1 });
        if (!terms) {
            terms = terms_entity_1.Terms.create({ id: 1, ...payload });
        }
        else {
            terms.content = payload.content;
        }
        return terms_entity_1.Terms.save(terms);
    }
};
exports.TermsAdminService = TermsAdminService;
exports.TermsAdminService = TermsAdminService = __decorate([
    (0, common_1.Injectable)()
], TermsAdminService);
//# sourceMappingURL=terms.admin.service.js.map