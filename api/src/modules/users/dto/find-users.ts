import { Prisma } from '@prisma/client';

export interface FindUsersDTO {
  skip?: number;
  take?: number;
  cursor?: Prisma.userWhereUniqueInput;
  where?: Prisma.userWhereInput;
  orderBy?: Prisma.userOrderByWithRelationInput;
}
