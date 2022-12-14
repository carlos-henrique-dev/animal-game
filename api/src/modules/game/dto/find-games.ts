import { Prisma } from '@prisma/client';

export interface FindGamesDTO {
  skip?: number;
  take?: number;
  cursor?: Prisma.gameWhereUniqueInput;
  where?: Prisma.gameWhereInput;
  orderBy?: Prisma.userOrderByWithRelationInput;
}
