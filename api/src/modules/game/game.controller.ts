import {
  Controller,
  Post,
  Body,
  Get,
  Param,
  HttpStatus,
  HttpException,
} from '@nestjs/common';
import { GameService } from './game.service';
import { game as GameModel } from '@prisma/client';
import { FindGamesDTO } from './dto/find-games';
import { CreateGameDTO } from './dto/create-game';
import { FindGameDto } from './dto/find-game';
import { GameSocketService } from 'src/events/game/game-socket.service';

@Controller()
export class GameController {
  constructor(
    private readonly gameService: GameService,
    private gameSocketService: GameSocketService,
  ) {}

  @Post('game')
  async createGame(
    @Body()
    gameData: CreateGameDTO,
  ): Promise<Partial<GameModel> | string> {
    const game = await this.gameService.game({ name: gameData.name });

    if (game) {
      throw new HttpException('Game already exists', HttpStatus.CONFLICT);
    }

    const newGame = await this.gameService.createGame(gameData);
    this.gameSocketService.broadCastNewGame(newGame);

    return newGame;
  }

  @Get('game')
  async findGames(
    @Param()
    filters: FindGamesDTO,
  ): Promise<GameModel[]> {
    return this.gameService.games(filters);
  }

  @Get('game/:name')
  async findGame(
    @Param()
    params: FindGameDto,
  ): Promise<GameModel> {
    const game = await this.gameService.game({ name: params.name });

    if (!game) {
      throw new HttpException('Game does not exist', HttpStatus.BAD_REQUEST);
    }

    return game;
  }
}
