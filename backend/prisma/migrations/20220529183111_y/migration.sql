/*
  Warnings:

  - A unique constraint covering the columns `[userId]` on the table `refreshtoken` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "refreshtoken_userId_key" ON "refreshtoken"("userId");
