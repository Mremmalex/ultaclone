/*
  Warnings:

  - A unique constraint covering the columns `[transactionRef]` on the table `Purchase` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Purchase_transactionRef_key" ON "Purchase"("transactionRef");
