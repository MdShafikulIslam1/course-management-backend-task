import catchAsync from '../../../shared/catchAsync';
import sendResponse from '../../../shared/sendResponse';
import { UserService } from './user.service';

const getProfile = catchAsync(async (req, res) => {
  const userId = req.user?.id;
  const result = await UserService.getProfile(userId);
  sendResponse(res, {
    statusCode: 201,
    success: true,
    message: 'Profile data retrieve successfully',
    data: result,
  });
});

export const UserController = { getProfile };
