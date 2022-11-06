import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/services/prisma.service';
import { bet as Bet } from '@prisma/client';

import { FindBetsDTO } from './dto/find-bets';
import { CreateBetDTO } from './dto/create-bet';
import { FindBetDto } from './dto/find-bet';

@Injectable()
export class BetService {
  constructor(private prisma: PrismaService) {}

  async bet(params: FindBetDto): Promise<Bet | null> {
    return this.prisma.bet.findFirst({ where: { ...params } });
  }

  async bets(params: FindBetsDTO): Promise<Bet[]> {
    return this.prisma.bet.findMany({ ...params });
  }

  async createBet(data: CreateBetDTO): Promise<Bet> {
    return this.prisma.bet.create({ data });
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
