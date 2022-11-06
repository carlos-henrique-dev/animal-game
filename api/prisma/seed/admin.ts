import { PrismaClient, role } from '@prisma/client';
import * as bcrypt from 'bcrypt';

interface Params {
  prismaClient: PrismaClient;
}

export async function AdminSeed({ prismaClient }: Params) {
  const saltOrRounds = 10;
  const hash = await bcrypt.hash('admin123', saltOrRounds);

  const user = {
    name: 'Admin',
    username: 'admin',
    password: hash,
    role: role.ADMIN,
  };

  return prismaClient.user.upsert({
    where: { username: 'admin' },
    create: user,
    update: user,
  });
}
