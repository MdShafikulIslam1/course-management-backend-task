/*
  Warnings:

  - The `description` column on the `courses` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - A unique constraint covering the columns `[title]` on the table `categories` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[title,categoryId,level]` on the table `courses` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE "courses" DROP COLUMN "description",
ADD COLUMN     "description" INTEGER;

-- CreateIndex
CREATE UNIQUE INDEX "categories_title_key" ON "categories"("title");

-- CreateIndex
CREATE UNIQUE INDEX "courses_title_categoryId_level_key" ON "courses"("title", "categoryId", "level");
