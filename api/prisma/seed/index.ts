import { PrismaClient } from '@prisma/client';
import { AnimalSeed } from './animals';

const prisma = new PrismaClient();

async function main() {
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
