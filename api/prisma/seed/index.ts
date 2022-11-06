import { PrismaClient } from '@prisma/client';
import { AdminSeed } from './admin';
import { AnimalSeed } from './animals';

const prisma = new PrismaClient();

async function main() {
  await AdminSeed({ prismaClient: prisma });
  await AnimalSeed({ prismaClient: prisma });
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
