import { User } from '@prisma/client';
import httpStatus from 'http-status';
import ApiError from '../../../error/ApiError';
import prisma from '../../../shared/prisma';

const viewProfile = async (id: string) => {
  const profile = await prisma.user.findUnique({
    where: {
      id: id,
    },
  });

  if (!profile) {
    throw new ApiError(httpStatus.NOT_FOUND, 'user not found');
  }
  return profile;
};

const updateProfile = async (id: string, data: Partial<User>) => {
  const isUserExist = await prisma.user.findUnique({
    where: {
      id: id,
    },
  });

  if (!isUserExist) {
    throw new ApiError(httpStatus.NOT_FOUND, 'user not found');
  }
  const updatedProfile = await prisma.user.update({
    where: {
      id: id,
    },
    data,
  });
  return updatedProfile;
};

export const UserService = {
  viewProfile,
  updateProfile,
};
