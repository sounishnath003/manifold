import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix('api');
  await app.listen(3000, async () => {
    console.log(
      `[Manifold Service Backend]: Server is up and running at port ${await app.getUrl()}:`,
    );
  });
}
bootstrap();
