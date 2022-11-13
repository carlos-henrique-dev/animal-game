import { Module } from '@nestjs/common';
import { GameSocketModule } from 'src/events/game/game-socket.module';
import { PrismaService } from 'src/services/prisma.service';
import { GameController } from './game.controller';
import { GameService } from './game.service';

@Module({
  imports: [GameSocketModule],
  controllers: [GameController],
  providers: [GameService, PrismaService],
  exports: [GameService],
})
export class GameModule {}
