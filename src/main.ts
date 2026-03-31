import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { ValidationPipe } from '@nestjs/common';
import { join } from 'path';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);

  // Uploads papkasini statik serve qilish
  app.useStaticAssets(join(__dirname, '..', 'uploads'), {
    prefix: '/uploads',
  });

  // Global validation pipe
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      transform: true,
    }),
  );

  // Swagger — BearerAuth qo'shildi
  const swaggerConfig = new DocumentBuilder()
    .setTitle('Uzchess APIs')
    .setVersion('1.0.0')
    .setDescription(
      'Uzchess loyihasi uchun REST API. '
      + 'Himoyalangan endpointlar uchun "Authorize" tugmasini bosib Bearer token kiriting.',
    )
    .addBearerAuth(
      {
        type: 'http',
        scheme: 'bearer',
        bearerFormat: 'JWT',
        name: 'Authorization',
        in: 'header',
      },
      'Bearer',
    )
    .build();

  const swaggerDoc = SwaggerModule.createDocument(app, swaggerConfig);
  SwaggerModule.setup('/docs', app, swaggerDoc, {
    swaggerOptions: {
      persistAuthorization: true, // sahifani yangilaganda ham token saqlanadi
    },
  });

  await app.listen(process.env.PORT ?? 3000);
  console.log(`\n🚀 Server: http://localhost:${process.env.PORT ?? 3000}`);
  console.log(`📄 Swagger: http://localhost:${process.env.PORT ?? 3000}/docs\n`);
}
bootstrap();
