import { NestFactory } from '@nestjs/core';
import { BooksModule } from './books.module';

async function bootstrap() {
  const app = await NestFactory.create(BooksModule);
  await app.listen(process.env.port ?? 3000);
}
bootstrap();
