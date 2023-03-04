/*
  Warnings:

  - You are about to drop the column `productID` on the `stocks` table. All the data in the column will be lost.
  - Added the required column `stockID` to the `products` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "stocks" DROP CONSTRAINT "stocks_productID_fkey";

-- AlterTable
ALTER TABLE "products" ADD COLUMN     "stockID" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "stocks" DROP COLUMN "productID";

-- AddForeignKey
ALTER TABLE "products" ADD CONSTRAINT "products_stockID_fkey" FOREIGN KEY ("stockID") REFERENCES "stocks"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
