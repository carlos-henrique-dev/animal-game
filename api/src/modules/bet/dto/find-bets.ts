import { Prisma } from '@prisma/client';

export interface FindBetsDTO {
  skip?: number;
  take?: number;
  cursor?: Prisma.betWhereUniqueInput;
  where?: Prisma.betWhereInput;
  orderBy?: Prisma.userOrderByWithRelationInput;
}
