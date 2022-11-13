import {
  WebSocketGateway,
  OnGatewayInit,
  OnGatewayConnection,
  OnGatewayDisconnect,
  WebSocketServer,
} from '@nestjs/websockets';
import { Logger } from '@nestjs/common';
import { Server, Socket } from 'socket.io';
import { GameSocketService } from './game-socket.service';

@WebSocketGateway({
  namespace: 'game',
})
export class GameSocketGateway
  implements OnGatewayInit, OnGatewayConnection, OnGatewayDisconnect
{
  constructor(private gameSocketService: GameSocketService) {}
  @WebSocketServer() public server: Server;
  private logger: Logger = new Logger('GameSocketGateway');

  afterInit(server: Server) {
    this.gameSocketService.socket = server;
    return;
  }

  handleDisconnect(client: Socket) {
    this.logger.log(`Client disconnected: ${client.id}`);
    return;
  }

  handleConnection(client: Socket, ...args: any[]) {
    this.logger.log(`Client connected: ${client.id}`);
    return;
  }
}
