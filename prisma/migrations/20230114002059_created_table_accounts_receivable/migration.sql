-- CreateTable
CREATE TABLE "accounts-receivable" (
    "id" TEXT NOT NULL,
    "saleID" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "accounts-receivable_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "accounts-receivable" ADD CONSTRAINT "accounts-receivable_saleID_fkey" FOREIGN KEY ("saleID") REFERENCES "sales"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
