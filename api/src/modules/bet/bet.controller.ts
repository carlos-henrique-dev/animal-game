import {
  Controller,
  Post,
  Body,
  Get,
  Param,
  HttpStatus,
  HttpException,
} from '@nestjs/common';
import { BetService } from './bet.service';
import { bet as BetModel } from '@prisma/client';
import { FindBetsDTO } from './dto/find-bets';
import { CreateBetDTO } from './dto/create-bet';
import { FindBetDto } from './dto/find-bet';
import { GameService } from '../game/game.service';

@Controller()
export class BetController {
  constructor(
    private readonly betService: BetService,
    private readonly gameService: GameService,
  ) {}

  @Post('bet')
  async createBet(
    @Body()
    betData: CreateBetDTO,
  ): Promise<BetModel | string> {
    const bet = await this.betService.bet(betData);

    if (bet) {
      throw new HttpException('Bet already exists', HttpStatus.CONFLICT);
    }

    const game = await this.gameService.game({ id: betData.gameId });
    const gameBets = await this.betService.bets({
      where: { gameId: betData.gameId },
    });

    if (gameBets.length >= game.betLimit) {
      throw new HttpException('Bet limit reached', HttpStatus.BAD_REQUEST);
    }

    return this.betService.createBet(betData);
  }

  @Get('bet')
  async findBets(
    @Param()
    filters: FindBetsDTO,
  ): Promise<BetModel[]> {
    return this.betService.bets(filters);
  }

  @Get('bet/:id')
  async findBet(
    @Param()
    params: FindBetDto,
  ): Promise<BetModel> {
    const bet = await this.betService.bet({ id: params.id });

    if (!bet) {
      throw new HttpException('Bet does not exist', HttpStatus.BAD_REQUEST);
    }

    return bet;
  }
}
