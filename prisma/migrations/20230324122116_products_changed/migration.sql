/*
  Warnings:

  - Added the required column `bar_code` to the `products` table without a default value. This is not possible if the table is not empty.
  - Added the required column `groupID` to the `products` table without a default value. This is not possible if the table is not empty.
  - Added the required column `manufacturerID` to the `products` table without a default value. This is not possible if the table is not empty.
  - Added the required column `reference` to the `products` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "products" ADD COLUMN     "bar_code" TEXT NOT NULL,
ADD COLUMN     "groupID" INTEGER NOT NULL,
ADD COLUMN     "manufacturerID" INTEGER NOT NULL,
ADD COLUMN     "reference" TEXT NOT NULL;

-- CreateTable
CREATE TABLE "manufacturers" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "manufacturers_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Group" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "Group_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "products" ADD CONSTRAINT "products_manufacturerID_fkey" FOREIGN KEY ("manufacturerID") REFERENCES "manufacturers"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "products" ADD CONSTRAINT "products_groupID_fkey" FOREIGN KEY ("groupID") REFERENCES "Group"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
