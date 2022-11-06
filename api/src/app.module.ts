import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AnimalModule } from './modules/animal/animal.module';
import { GameModule } from './modules/game/game.module';
import { UserModule } from './modules/users/user.module';

@Module({
  imports: [UserModule, GameModule, AnimalModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
