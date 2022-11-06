/*
  Warnings:

  - You are about to drop the `game_bets` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `gameId` to the `bet` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "game_bets" DROP CONSTRAINT "game_bets_betId_fkey";

-- DropForeignKey
ALTER TABLE "game_bets" DROP CONSTRAINT "game_bets_gameId_fkey";

-- AlterTable
ALTER TABLE "bet" ADD COLUMN     "gameId" INTEGER NOT NULL;

-- DropTable
DROP TABLE "game_bets";

-- AddForeignKey
ALTER TABLE "bet" ADD CONSTRAINT "bet_gameId_fkey" FOREIGN KEY ("gameId") REFERENCES "game"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
