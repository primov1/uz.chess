"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.typeOrmConfig = void 0;
exports.typeOrmConfig = {
    type: 'postgres',
    url: process.env.DATABASE_URL ||
        'postgresql://postgres:1111@localhost:5432/chess.com',
    synchronize: false,
    entities: [__dirname + '/../**/*.entity{.tpublics,.js}'],
    logging: false,
};
//# sourceMappingURL=typyeorm.config.js.map