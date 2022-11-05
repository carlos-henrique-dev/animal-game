/*
  Warnings:

  - A unique constraint covering the columns `[name]` on the table `animal` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateTable
CREATE TABLE "bet" (
    "id" SERIAL NOT NULL,
    "userId" INTEGER NOT NULL,
    "animalId" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "bet_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "animal_name_key" ON "animal"("name");

-- AddForeignKey
ALTER TABLE "bet" ADD CONSTRAINT "bet_userId_fkey" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "bet" ADD CONSTRAINT "bet_animalId_fkey" FOREIGN KEY ("animalId") REFERENCES "animal"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
