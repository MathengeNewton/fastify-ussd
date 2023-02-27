/*
  Warnings:

  - Added the required column `last_step` to the `ussd_logs` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "ussd_logs" ADD COLUMN     "last_step" TEXT NOT NULL;
