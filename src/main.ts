import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Enable CORS before listening
  app.enableCors({
    origin: ['http://localhost:3000'], // your frontend origin
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS',
    allowedHeaders: ["Content-Type", "Authorization"],
    credentials: true,
  });

  await app.listen(process.env.PORT ?? 8000);
  console.log(`Server running on port ${process.env.PORT ?? 8000}`);
}

bootstrap();
