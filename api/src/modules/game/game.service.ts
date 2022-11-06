import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/services/prisma.service';
import { game as Game, Prisma } from '@prisma/client';

import { FindGamesDTO } from './dto/find-games';
import { CreateGameDTO } from './dto/create-game';

@Injectable()
export class GameService {
  constructor(private prisma: PrismaService) {}

  async game(
    gameWhereUniqueInput: Prisma.gameWhereUniqueInput,
  ): Promise<Game | null> {
    return this.prisma.game.findUnique({ where: gameWhereUniqueInput });
  }

  async games(params: FindGamesDTO): Promise<Game[]> {
    return this.prisma.game.findMany({ ...params });
  }

  async createGame(data: CreateGameDTO): Promise<Game> {
    return this.prisma.game.create({ data });
  }

  //   async updateGame(params: {
  //     where: Prisma.userWhereUniqueInput;
  //     data: Prisma.userUpdateInput;
  //   }): Promise<Game> {
  //     const { where, data } = params;
  //     return this.prisma.game.update({ data, where });
  //   }

  //   async deleteUser(where: Prisma.userWhereUniqueInput): Promise<User> {
  //     return this.prisma.user.delete({
  //       where,
  //     });
  //   }
}
