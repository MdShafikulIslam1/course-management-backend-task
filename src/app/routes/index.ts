import { Router } from 'express';
import { AuthenticationRouter } from '../modules/Authentication/authentication.routes';
import { CategoryRouter } from '../modules/course-category/course-category.routes';
import { CourseRouter } from '../modules/Course/course.routes';
import { UserRouter } from '../modules/user/user.routes';

const router = Router();

const moduleRoutes = [
  {
    path: '/auth',
    route: AuthenticationRouter,
  },
  {
    path: '/user',
    route: UserRouter,
  },
  {
    path: '/category',
    route: CategoryRouter,
  },
  {
    path: '/course',
    route: CourseRouter,
  },
];

moduleRoutes.forEach(route => {
  router.use(route.path, route.route);
});

export default router;
