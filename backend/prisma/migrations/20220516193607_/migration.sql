/*
  Warnings:

  - You are about to drop the column `personId` on the `products` table. All the data in the column will be lost.
  - You are about to drop the `persons` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `userId` to the `products` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "products" DROP CONSTRAINT "products_personId_fkey";

-- AlterTable
ALTER TABLE "products" DROP COLUMN "personId",
ADD COLUMN     "userId" INTEGER NOT NULL;

-- DropTable
DROP TABLE "persons";

-- CreateTable
CREATE TABLE "Users" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "cpf" TEXT NOT NULL,

    CONSTRAINT "Users_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "products" ADD CONSTRAINT "products_userId_fkey" FOREIGN KEY ("userId") REFERENCES "Users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
