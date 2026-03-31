"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const swagger_1 = require("@nestjs/swagger");
const common_1 = require("@nestjs/common");
const path_1 = require("path");
const app_module_1 = require("./app.module");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    app.useStaticAssets((0, path_1.join)(__dirname, '..', 'uploads'), {
        prefix: '/uploads',
    });
    app.useGlobalPipes(new common_1.ValidationPipe({
        whitelist: true,
        transform: true,
    }));
    const swaggerConfig = new swagger_1.DocumentBuilder()
        .setTitle('Uzchess APIs')
        .setVersion('1.0.0')
        .setDescription('Uzchess loyihasi uchun REST API. '
        + 'Himoyalangan endpointlar uchun "Authorize" tugmasini bosib Bearer token kiriting.')
        .addBearerAuth({
        type: 'http',
        scheme: 'bearer',
        bearerFormat: 'JWT',
        name: 'Authorization',
        in: 'header',
    }, 'Bearer')
        .build();
    const swaggerDoc = swagger_1.SwaggerModule.createDocument(app, swaggerConfig);
    swagger_1.SwaggerModule.setup('/docs', app, swaggerDoc, {
        swaggerOptions: {
            persistAuthorization: true,
        },
    });
    await app.listen(process.env.PORT ?? 3000);
    console.log(`\n🚀 Server: http://localhost:${process.env.PORT ?? 3000}`);
    console.log(`📄 Swagger: http://localhost:${process.env.PORT ?? 3000}/docs\n`);
}
bootstrap();
//# sourceMappingURL=main.js.map