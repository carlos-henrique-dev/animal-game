/*
  Warnings:

  - A unique constraint covering the columns `[name]` on the table `game` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `name` to the `game` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "game" ADD COLUMN     "name" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "game_name_key" ON "game"("name");
