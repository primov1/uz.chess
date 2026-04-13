"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const typeorm_1 = require("typeorm");
const AppDataSource = new typeorm_1.DataSource({
    type: 'postgres',
    url: process.env.DATABASE_URL ||
        'postgresql://postgres:1111@localhost:5432/chess.com',
    entities: ['dist/**/*.intity.js'],
    synchronize: false,
    migrations: [__dirname + '/migrations/**/*{.js,.ts}'],
});
exports.default = AppDataSource;
//# sourceMappingURL=data-source.js.map