import { Module, Global } from '@nestjs/common';
import { GameSocketService } from './game-socket.service';

@Global()
@Module({
  controllers: [],
  providers: [GameSocketService],
  exports: [GameSocketService],
})
export class GameSocketModule {}
