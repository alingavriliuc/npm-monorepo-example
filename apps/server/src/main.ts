import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { z } from 'zod';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(3001);
  console.log(`Application is running on: ${await app.getUrl()}`);
  console.log(z.string().parse('hello')); // zod is a shared dependency between the apps
}
bootstrap();
