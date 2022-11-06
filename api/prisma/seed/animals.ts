import { PrismaClient } from '@prisma/client';

interface Params {
  prismaClient: PrismaClient;
}

const animals = [
  { name: 'Avestruz' },
  { name: 'Águia' },
  { name: 'Burro' },
  { name: 'Borboleta' },
  { name: 'Cachorro' },
  { name: 'Cabra' },
  { name: 'Carneiro' },
  { name: 'Camelo' },
  { name: 'Cobra' },
  { name: 'Coelho' },
  { name: 'Cavalo' },
  { name: 'Elefante' },
  { name: 'Galo' },
  { name: 'Gato' },
  { name: 'Jacaré' },
  { name: 'Leão' },
  { name: 'Macaco' },
  { name: 'Porco' },
  { name: 'Pavão' },
  { name: 'Peru' },
  { name: 'Touro' },
  { name: 'Tigre' },
  { name: 'Urso' },
  { name: 'Veado' },
  { name: 'Vaca' },
];

export async function AnimalSeed({ prismaClient }: Params) {
  return prismaClient.animal.createMany({
    data: animals,
    skipDuplicates: true,
  });
}
