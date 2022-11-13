import { Injectable } from '@nestjs/common';
import { Server } from 'socket.io';
import { Game } from 'src/types/game';
import { GameEventEmitters } from './interfaces';

@Injectable()
export class GameSocketService {
  public socket: Server = null;

  broadCastNewGame(params: Game) {
    this.socket.emit(GameEventEmitters.GAME_CREATED, params);
  }
}
