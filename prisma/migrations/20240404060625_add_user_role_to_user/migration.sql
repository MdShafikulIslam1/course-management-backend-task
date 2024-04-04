/*
  Warnings:

  - The `roll` column on the `users` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- CreateEnum
CREATE TYPE "UserRole" AS ENUM ('user', 'super_admin');

-- AlterTable
ALTER TABLE "users" DROP COLUMN "roll",
ADD COLUMN     "roll" "UserRole" NOT NULL DEFAULT 'user';
