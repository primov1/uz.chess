"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.jwtConfig = void 0;
exports.jwtConfig = {
    global: true,
    secret: process.env.JWT_SECRET ?? 'veryveryveryevryevryevryeyvrCode001',
    signOptions: {
        expiresIn: '3h',
    },
};
//# sourceMappingURL=jwt.config.js.map