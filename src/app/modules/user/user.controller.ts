import catchAsync from '../../../shared/catchAsync';
import sendResponse from '../../../shared/sendResponse';
import { UserService } from './user.service';

const viewProfile = catchAsync(async (req, res) => {
  const userId = req.user?.id;
  const result = await UserService.viewProfile(userId);
  sendResponse(res, {
    statusCode: 201,
    success: true,
    message: 'Profile data retrieve successfully',
    data: result,
  });
});

const updateProfile = catchAsync(async (req, res) => {
  const result = await UserService.updateProfile(req.params.id, req.body);
  sendResponse(res, {
    statusCode: 201,
    success: true,
    message: 'Profile data update successfully',
    data: result,
  });
});

export const UserController = { viewProfile, updateProfile };
