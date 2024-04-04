import httpStatus from 'http-status';
import ApiError from '../../../error/ApiError';
import prisma from '../../../shared/prisma';

const getProfile = async (id: string) => {
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

export const UserService = {
  getProfile,
};
