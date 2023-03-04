/*
  Warnings:

  - You are about to drop the column `open` on the `accounts-receivable` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "accounts-receivable" DROP COLUMN "open";

-- AlterTable
ALTER TABLE "sales" ADD COLUMN     "open" BOOLEAN NOT NULL DEFAULT true;
