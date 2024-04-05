/* eslint-disable @typescript-eslint/no-explicit-any */
import { Course, Enrollment, Prisma } from '@prisma/client';
import { IGenericResponse } from '../../../interfaces/common';

import { paginationHelpers } from '../../../helpers/paginationHelpers';
import { IPaginationOptions } from '../../../interfaces/paginationOptions';
import prisma from '../../../shared/prisma';
import {
  courseRelationalFields,
  courseRelationalFieldsMapper,
  courseSearchableFields,
} from './course.constant';
import { ICourseFilterRequest } from './course.interface';

const insertIntoDB = async (data: Course): Promise<Course> => {
  const result = await prisma.course.create({
    data,
    include: {
      category: true,
    },
  });
  return result;
};

const getAllFromDB = async (
  filters: ICourseFilterRequest,
  options: IPaginationOptions
): Promise<IGenericResponse<Course[]>> => {
  const { limit, page, skip } = paginationHelpers.calculatePagination(options);
  const { searchTerm, ...filterData } = filters;

  const andConditions = [];

  if (searchTerm) {
    andConditions.push({
      OR: courseSearchableFields.map(field => ({
        [field]: {
          contains: searchTerm,
          mode: 'insensitive',
        },
      })),
    });
  }

  if (Object.keys(filterData).length > 0) {
    andConditions.push({
      AND: Object.keys(filterData).map(key => {
        if (courseRelationalFields.includes(key)) {
          return {
            [courseRelationalFieldsMapper[key]]: {
              id: (filterData as any)[key],
            },
          };
        } else {
          return {
            [key]: {
              equals: (filterData as any)[key],
            },
          };
        }
      }),
    });
  }

  const whereConditions: Prisma.CourseWhereInput =
    andConditions.length > 0 ? { AND: andConditions } : {};

  const result = await prisma.course.findMany({
    include: {
      category: true,
    },
    where: whereConditions,
    skip,
    take: limit,
    orderBy:
      options.sortBy && options.sortOrder
        ? { [options.sortBy]: options.sortOrder }
        : {
            createdAt: 'desc',
          },
  });
  const total = await prisma.course.count({
    where: whereConditions,
  });

  return {
    meta: {
      total,
      page,
      limit,
    },
    data: result,
  };
};

const getByIdFromDB = async (id: string): Promise<Course | null> => {
  const result = await prisma.course.findFirst({
    where: {
      id,
    },
    include: {
      category: true,
    },
  });
  return result;
};

const updateOneInDB = async (
  id: string,
  payload: Partial<Course>
): Promise<Course> => {
  const result = await prisma.course.update({
    where: {
      id,
    },
    data: payload,
    include: {
      category: true,
    },
  });
  return result;
};

const deleteByIdFromDB = async (id: string): Promise<Course> => {
  const result = await prisma.course.delete({
    where: {
      id,
    },
    include: {
      category: true,
    },
  });
  return result;
};

const assignCourse = async (payload: Enrollment) => {
  const result = await prisma.enrollment.create({
    data: payload,
    include: {
      course: true,
      user: true,
    },
  });
  return result;
};

const myCourses = async (id: string): Promise<Enrollment[]> => {
  const result = await prisma.enrollment.findMany({
    where: {
      user: {
        id: id,
      },
    },
    include: {
      course: true,
      user: true,
    },
  });
  return result;
};

export const CourseService = {
  insertIntoDB,
  getAllFromDB,
  getByIdFromDB,
  updateOneInDB,
  deleteByIdFromDB,
  assignCourse,
  myCourses,
};
