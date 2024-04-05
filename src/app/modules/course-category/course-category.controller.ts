import catchAsync from '../../../shared/catchAsync';
import sendResponse from '../../../shared/sendResponse';
import { CategoryService } from './course-category.service';

const insertIntoDB = catchAsync(async (req, res) => {
  const result = await CategoryService.insertIntoDb(req.body);
  sendResponse(res, {
    statusCode: 201,
    success: true,
    message: 'Course category created successfully',
    data: result,
  });
});

export const CategoryController = { insertIntoDB };
