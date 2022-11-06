import { Module } from '@nestjs/common';
import { PrismaService } from 'src/services/prisma.service';
import { GameService } from '../game/game.service';
import { BetController } from './bet.controller';
import { BetService } from './bet.service';

@Module({
  imports: [],
  controllers: [BetController],
  providers: [BetService, GameService, PrismaService],
  exports: [BetService],
})
export class BetModule {}
