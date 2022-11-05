-- CreateEnum
CREATE TYPE "status" AS ENUM ('WINNER', 'LOOSER');

-- CreateTable
CREATE TABLE "game" (
    "id" SERIAL NOT NULL,
    "betLimit" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "game_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "game_bets" (
    "id" SERIAL NOT NULL,
    "gameId" INTEGER NOT NULL,
    "betId" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "game_bets_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "game_results" (
    "id" SERIAL NOT NULL,
    "betId" INTEGER NOT NULL,
    "status" "status" NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "game_results_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "game_bets_betId_key" ON "game_bets"("betId");

-- CreateIndex
CREATE UNIQUE INDEX "game_results_betId_key" ON "game_results"("betId");

-- AddForeignKey
ALTER TABLE "game_bets" ADD CONSTRAINT "game_bets_gameId_fkey" FOREIGN KEY ("gameId") REFERENCES "game"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "game_bets" ADD CONSTRAINT "game_bets_betId_fkey" FOREIGN KEY ("betId") REFERENCES "bet"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "game_results" ADD CONSTRAINT "game_results_betId_fkey" FOREIGN KEY ("betId") REFERENCES "bet"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
