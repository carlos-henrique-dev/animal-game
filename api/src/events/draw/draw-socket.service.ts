import { Injectable } from '@nestjs/common';
import { Server } from 'socket.io';

@Injectable()
export class DrawSocketService {
  public socket: Server = null;
}
