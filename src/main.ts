import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';


async function bootstrap() {
  // const app = await NestFactory.create(AppModule);
    const app = await NestFactory.create(AppModule, {
    cors: {
      // origin: [
      //   'http://localhost:3000',   // фронт локально
      //   'https://www.thunderclient.com', // боевой фронт
      // ],
      
      credentials: true,           // если нужны cookies/headers
      methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH', 'OPTIONS'],
    },
  });

  console.log('PORT', process.env.PORT);

  await app.listen(process.env.PORT ?? 4000);
}
bootstrap();
