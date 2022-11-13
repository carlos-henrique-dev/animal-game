import {
  WebSocketGateway,
  OnGatewayInit,
  OnGatewayConnection,
  OnGatewayDisconnect,
  WebSocketServer,
} from '@nestjs/websockets';
import { Logger } from '@nestjs/common';
import { Server, Socket } from 'socket.io';
import { DrawSocketService } from './draw-socket.service';

@WebSocketGateway({
  namespace: 'draw',
})
export class DrawSocketGateway
  implements OnGatewayInit, OnGatewayConnection, OnGatewayDisconnect
{
  constructor(private drawSocketService: DrawSocketService) {}
  @WebSocketServer() public server: Server;
  private logger: Logger = new Logger('DrawSocketGateway');

  afterInit(server: Server) {
    this.drawSocketService.socket = server;
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
