import { CourseLevel } from '@prisma/client';

export type ICourseFilterRequest = {
  searchTerm?: string;
  categoryId?: string;
  level?: CourseLevel;
  popularity?: number;
  title?: string;
  instructor?: string;
  duration?: string;
  price?: number;
};
