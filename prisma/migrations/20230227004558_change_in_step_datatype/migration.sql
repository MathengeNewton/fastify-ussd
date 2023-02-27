/*
  Warnings:

  - Made the column `response` on table `ussd_steps` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "ussd_steps" ADD COLUMN     "is_active" BOOLEAN NOT NULL DEFAULT true,
ALTER COLUMN "step" SET DATA TYPE TEXT,
ALTER COLUMN "response" SET NOT NULL;
