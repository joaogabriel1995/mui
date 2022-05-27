/*
  Warnings:

  - The primary key for the `ad` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `products` table will be changed. If it partially fails, the table could be left without primary key constraint.

*/
-- DropForeignKey
ALTER TABLE "ad" DROP CONSTRAINT "ad_productId_fkey";

-- DropForeignKey
ALTER TABLE "sales" DROP CONSTRAINT "sales_adId_fkey";

-- AlterTable
ALTER TABLE "ad" DROP CONSTRAINT "ad_pkey",
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ALTER COLUMN "productId" SET DATA TYPE TEXT,
ADD CONSTRAINT "ad_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "ad_id_seq";

-- AlterTable
ALTER TABLE "products" DROP CONSTRAINT "products_pkey",
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ADD CONSTRAINT "products_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "products_id_seq";

-- AlterTable
ALTER TABLE "sales" ALTER COLUMN "adId" SET DATA TYPE TEXT;

-- AddForeignKey
ALTER TABLE "ad" ADD CONSTRAINT "ad_productId_fkey" FOREIGN KEY ("productId") REFERENCES "products"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "sales" ADD CONSTRAINT "sales_adId_fkey" FOREIGN KEY ("adId") REFERENCES "ad"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
