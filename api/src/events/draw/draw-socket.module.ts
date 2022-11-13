import { Module, Global } from '@nestjs/common';
import { DrawSocketService } from './draw-socket.service';

@Global()
@Module({
  controllers: [],
  providers: [DrawSocketService],
  exports: [DrawSocketService],
})
export class DrawSocketModule {}
