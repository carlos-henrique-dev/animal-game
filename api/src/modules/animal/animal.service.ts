import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/services/prisma.service';
import { animal as Animal, Prisma } from '@prisma/client';

import { FindAnimalsDTO } from './dto/find-animals';

@Injectable()
export class AnimalService {
  constructor(private prisma: PrismaService) {}

  async game(query: Prisma.animalWhereUniqueInput): Promise<Animal | null> {
    return this.prisma.animal.findFirst({
      where: {
        ...query,
        name: {
          contains: query.name,
          mode: 'insensitive',
        },
      },
    });
  }

  async games(params: FindAnimalsDTO): Promise<Animal[]> {
    return this.prisma.animal.findMany({ ...params });
  }
}
