import { Module } from '@nestjs/common';
import { DrawSocketGateway } from '../events/draw/draw-socket.gateway';
import { DrawSocketModule } from '../events/draw/draw-socket.module';
import { GameSocketGateway } from '../events/game/game-socket.gateway';
import { GameSocketModule } from '../events/game/game-socket.module';
import { AnimalModule } from '../modules/animal/animal.module';
import { BetModule } from '../modules/bet/bet.module';
import { GameModule } from '../modules/game/game.module';
import { UserModule } from '../modules/users/user.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [
    UserModule,
    GameModule,
    AnimalModule,
    BetModule,
    GameSocketModule,
    DrawSocketModule,
  ],
  controllers: [AppController],
  providers: [AppService, GameSocketGateway, DrawSocketGateway],
})
export class AppModule {}
