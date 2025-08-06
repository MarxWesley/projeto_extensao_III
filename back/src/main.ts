import { NestFactory } from '@nestjs/core';
import { AppModule } from './app/app.module';
import { ValidationPipe } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      transform: true,
      forbidNonWhitelisted: true,
    }),
  );
  app.enableCors({
    origin: 'http://localhost:3000', 
  })

  const config = new DocumentBuilder()
  .setTitle('API IEE Diomicio Freitas')
  .setDescription('API desenvolvida para o site do Instituo de Educação Especial Diomício Freitas')
  .setVersion('1.0')
  .addBearerAuth()
  .addTag('Contact', 'Formulário para contato via email')
  .addTag('Notice', 'Notícias no geral')
  .build()

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('swagger', app, document);  //localhost:3001/ieeDiomicioFreitas

  await app.listen(process.env.PORT ?? 3001);
}
bootstrap();