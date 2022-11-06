import { Prisma } from '@prisma/client';

export interface FindAnimalsDTO {
  skip?: number;
  take?: number;
  cursor?: Prisma.animalWhereUniqueInput;
  where?: Prisma.animalWhereInput;
  orderBy?: Prisma.userOrderByWithRelationInput;
}
