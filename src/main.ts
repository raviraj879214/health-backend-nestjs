import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { VersioningType } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Enable CORS before listening
  app.enableCors({
    origin: ['https://health-tech-ui.vercel.app'], // your frontend origin
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS',
    allowedHeaders: ["Content-Type", "Authorization"],
    credentials: true,
  });


  app.enableVersioning({
    type: VersioningType.URI, // version comes from URL
    defaultVersion: '1',      // optional
  });




  await app.listen(process.env.PORT ?? 8000);

  console.log(`Server running on port ${process.env.PORT ?? 8000}`);
}

bootstrap();
