import { Router } from 'express';
import { CourseController } from './course.controller';

const router = Router();

router.get('/', CourseController.getAllFromDB);

router.get('/enrollment/:id', CourseController.myCourses);

router.get('/:id', CourseController.getByIdFromDB);

router.post(
  '/create',
  //   validateRequest(FacultyValidation.create),
  CourseController.insertIntoDB
);

router.post('/enrollment', CourseController.assignCourse);

router.patch(
  '/:id',
  //   validateRequest(FacultyValidation.update),
  //   auth(ENUM_USER_ROLE.SUPER_ADMIN, ENUM_USER_ROLE.ADMIN),
  CourseController.updateOneInDB
);

router.delete(
  '/:id',
  //   auth(ENUM_USER_ROLE.SUPER_ADMIN, ENUM_USER_ROLE.ADMIN),
  CourseController.deleteByIdFromDB
);

export const CourseRouter = router;
