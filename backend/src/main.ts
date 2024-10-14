import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  console.log('process',process.env)
  const app = await NestFactory.create(AppModule, { cors: true  });
  app.setGlobalPrefix('api');

  await app.listen(3010);
}
bootstrap();
