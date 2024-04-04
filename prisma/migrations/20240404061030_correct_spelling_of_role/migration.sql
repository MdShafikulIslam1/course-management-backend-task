/*
  Warnings:

  - You are about to drop the column `roll` on the `users` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "users" DROP COLUMN "roll",
ADD COLUMN     "role" "UserRole" NOT NULL DEFAULT 'user';
