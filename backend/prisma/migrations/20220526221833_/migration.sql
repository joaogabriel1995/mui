/*
  Warnings:

  - The primary key for the `ad` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The `id` column on the `ad` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The primary key for the `products` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The `id` column on the `products` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - Changed the type of `productId` on the `ad` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Made the column `userId` on table `products` required. This step will fail if there are existing NULL values in that column.
  - Changed the type of `adId` on the `sales` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- DropForeignKey
ALTER TABLE "ad" DROP CONSTRAINT "ad_productId_fkey";

-- DropForeignKey
ALTER TABLE "products" DROP CONSTRAINT "products_userId_fkey";

-- DropForeignKey
ALTER TABLE "sales" DROP CONSTRAINT "sales_adId_fkey";

-- AlterTable
ALTER TABLE "ad" DROP CONSTRAINT "ad_pkey",
DROP COLUMN "id",
ADD COLUMN     "id" SERIAL NOT NULL,
DROP COLUMN "productId",
ADD COLUMN     "productId" INTEGER NOT NULL,
ADD CONSTRAINT "ad_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "products" DROP CONSTRAINT "products_pkey",
DROP COLUMN "id",
ADD COLUMN     "id" SERIAL NOT NULL,
ALTER COLUMN "userId" SET NOT NULL,
ADD CONSTRAINT "products_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "sales" DROP COLUMN "adId",
ADD COLUMN     "adId" INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE "products" ADD CONSTRAINT "products_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ad" ADD CONSTRAINT "ad_productId_fkey" FOREIGN KEY ("productId") REFERENCES "products"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "sales" ADD CONSTRAINT "sales_adId_fkey" FOREIGN KEY ("adId") REFERENCES "ad"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
