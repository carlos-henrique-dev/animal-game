import { NestFactory } from '@nestjs/core';
import { IoAdapter } from '@nestjs/platform-socket.io';
import { ServerOptions, Server } from 'http';
import { AppModule } from './app/app.module';

export class GameIoAdapter extends IoAdapter {
  createIOServer(port: number, options?: ServerOptions): any {
    const server: Server = super.createIOServer(port, options);
    return server;
  }
}

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useWebSocketAdapter(new GameIoAdapter(app));

  await app.listen(3000);
}
bootstrap();
